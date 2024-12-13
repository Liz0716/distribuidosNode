import { Utils } from "../../tools/Utils";
import { UserService } from "../services/UserService";



class UserModel{
    // static async viewUser(){
    //     return await UserService.viewUser();
    // }
    static async registro({
        nombre,
        apellido_paterno,
        apellido_materno,
        telefono,
        fecha_nacimiento,
        email,
        password,
    }: {
        nombre: string;
        apellido_paterno: string;
        apellido_materno?: string;
        telefono: string;
        fecha_nacimiento: Date;
        email: string;
        password: string;
        
    }) {
        const hashedPassword = await Utils.hash(password);
    
        const res: any = await UserService.registro({
            nombre,
            apellido_paterno,
            apellido_materno,
            telefono,
            fecha_nacimiento,
            email,
            password: hashedPassword
        });
    
        if (res.error) return res;
    
        return { error: false, msg: "Usuario registrado exitosamente" };
    }

    static async login(email: string, password: string) {
        const res = await UserService.login(email, password);
    
        // Verificar si hubo un error o si el mensaje no contiene datos válidos
        if (res.error || typeof res.msg !== "object" || !res.msg) {
            return { error: true, msg: "Usuario no encontrado" };
        }
    
        const msj = res.msg;
    
    
         delete msj.contrasena; // Eliminar la contraseña antes de retornar los datos
    
        return {
            error: false,
            msg: {
                id: msj.id,
                nombre: msj.nombre,
                apellido_paterno: msj.apellido_paterno,
                apellido_materno: msj.apellido_materno,
            },
        };
    }
    
}

export{UserModel}