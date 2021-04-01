const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(_email, _password, _nombre, _edad, _imagen) {
        this.email = _email;
        this.password = _password;
        this.nombre = _nombre;
        this.edad = _edad;
        this.imagen = _imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
            .then((password_encriptado) => {
                return db.execute(
                    'INSERT INTO usuario (email, password, nombre, edad, imagen) VALUES (?, ?, ?, ?, ?)',
                    [this.email, password_encriptado, this.nombre, this.edad, this.imagen]
                );
            })
            .catch(err => console.log(err)); 
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM usuario');
    }

    static fetchOne(id) { 
        return db.execute('SELECT * FROM usuario WHERE id_usuario=?', [id]);
    }

    static fetchMail(correo) {
        return db.execute('SELECT * FROM usuario WHERE email=?', [correo]);
    }
}