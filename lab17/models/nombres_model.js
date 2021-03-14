const db = require('../util/database');

module.exports = class Nombre {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(correo, nombre, contraseña, imagen) {
        this.correo = correo;
        this.nombre = nombre;
        this.contraseña = contraseña;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO usuario (correo, nombre, contraseña, imagen) VALUES (?, ?, ?, ?)',
            [this.correo, this.nombre, this.contraseña, this.imagen]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM usuario');
    }

    static fetchOne(id) { 
        return db.execute('SELECT * FROM usuario WHERE usuario_id=?', [id]);
    }

}