const names = [{id: 1, nombre:"Rafa", edad: 20, imagen:"https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
               {id: 2, nombre: "Fio", edad: 20, imagen: "https://i.blogs.es/929fca/capitana-marvel/1366_2000.jpg"}, 
               {id: 3, nombre: "Benito", edad: 21, imagen: ""}];         

module.exports = class Nombre {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, edad, imagen) {
        this.nombre = nombre;
        this.edad = edad;
        this.imagen = imagen;
        this.id = names.length + 1;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        names.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return names;
    }

    static deleteLast() {
        return names.pop();
    }

    static deleteOne(id) {
        // poner que busque la posicion del id... y elimine el registro....
        // return names.splice(id, 1);
        for(let i=id; i<names.length; i++) {
            names[i].id -= 1;
        }
        return names.splice(id-1, 1);
    }
}