// es recibir la informacion del front o de donde vayamos a hacer las pruebas por ejemplo postamn 
import { CustomExceptions } from "../../tools/CustomExceptions";
import { Utils } from "../../tools/Utils";
import { UserModel } from "../models/UserModel";

class UserController{

    static async registroUser(req: any, res: any) {
      const { nombre, apellido_paterno, apellido_materno, telefono, fecha_nacimiento, email, password} = req.body;

      if (
          Utils.hasEmptyParams([
              nombre, apellido_paterno,apellido_materno, telefono, fecha_nacimiento, email, password
          ])
      ) {
          throw new CustomExceptions("007");
      }

      const result = await UserModel.registro({
        nombre, apellido_paterno,apellido_materno, telefono, fecha_nacimiento, email, password
      });

      res.json(result);
  }

  static async loginUser(req: any, res: any) {

    console.log("Datos recibidos en el cuerpo de la solicitud:", req.body);
      const { email, password } = req.body;

    //   if (Utils.hasEmptyParams([correo_electronico, contrasena]))
    //       throw new CustomExceptions("007");
    if (Utils.hasEmptyParams([email, password])) {
        console.log("Parámetros vacíos detectados");
        throw new CustomExceptions("007");
      }

      const result = await UserModel.login(email, password);

      res.json(result);
  }
}

    


export{UserController}

// tsc -w

//  despues en otra terminal      nodemon dist/  