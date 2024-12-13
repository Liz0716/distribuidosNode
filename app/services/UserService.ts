import { DatabaseMethods } from "../../config/database/DatabaseMethods"; // la ubicasion de mis metodos
import bcrypt from "bcrypt";
import { CustomExceptions } from "../../tools/CustomExceptions";
import { Utils } from "../../tools/Utils";
import axios from "axios";
import { error } from "console";

class UserService {
  //   aqui va el select para el usario y la contraseña
  static async registro(userData: any) {
    const {
      nombre,
      apellido_paterno,
      apellido_materno,
      telefono,
      fecha_nacimiento,
      email,
      password,
    } = userData;

    const saveResult = await DatabaseMethods.save({
      query: `
          INSERT INTO usuarios 
          (nombre, apellido_paterno, apellido_materno, telefono, fecha_nacimiento,email, password) 
          VALUES (?, ?, ?, ?, ?,?, ?)`,
      params: [
        nombre,
        apellido_paterno,
        apellido_materno,
        telefono,
        fecha_nacimiento,
        email,
        password,
      ],
    });

    // Para encontrar un error al guardar al usuario
    if (saveResult.error) {
      return saveResult;
    }

    await this.correo({
      userName: `${nombre} ${apellido_paterno}`,
      email: email
    })

    return {
      error: false, msg: "Registro exitoso"
    }


  }

  static async login(email: string, password: string) {
    const res = await DatabaseMethods.query_one({
      query: "SELECT * FROM usuarios WHERE email = ?",
      params: [email],
    });
    if (res.error) return res;

    // Guardamos lo que viene en la key msg en una variable
    const msj = res.msg;

    // Si hay error puede que nos devuelva solamente un string, pero nosotros necesitamos un objeto
    // Entonces evaluamos qu no sea un string
    if (typeof msj === "string") {
      throw new CustomExceptions("004");
    }

    // Evaluamos si no viene null
    if (!msj) throw new CustomExceptions("004");

    // Checamos si la contraseña coincide
    if (!(await Utils.verify(password, msj.password)))
      throw new CustomExceptions("005");

    return { error: false, msg: msj };
  }

  static async correo(data: { userName: string; email: string }) {
    const url = "http://localhost:5219/api/pipedream/welcome";
    try {
      const response = await axios.post(url, data);
      console.log(`Correo enviado exitosamente: ${response.status}`);
    } catch (error) {
      console.error(`Error al enviar: ${error}`);
    }

  }



}

export { UserService };
