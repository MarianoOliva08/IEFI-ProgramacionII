"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(dni, nombre, apellido, edad, // El signo de interrogación indica que es opcional
    estudios = [] // Agregamos un arreglo de estudios, inicializado como vacío
    ) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.estudios = estudios;
    }
    // Método para convertir la persona a JSON
    toJSON() {
        return {
            dni: this.dni,
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            estudios: this.estudios.map(estudio => estudio.toJSON()) // Convierte cada estudio a un objeto JSON
        };
    }
}
exports.Persona = Persona;
