import { Estudio } from './Estudio'; // Asegúrate de que esta línea esté presente

export class Persona {
    constructor(
        public dni: string,
        public nombre: string,
        public apellido: string,
        public edad?: number, // El signo de interrogación indica que es opcional
        public estudios: Estudio[] = [] // Agregamos un arreglo de estudios, inicializado como vacío
    ) {}

    // Método para convertir la persona a JSON
    toJSON(): object {
        return {
            dni: this.dni,
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            estudios: this.estudios.map(estudio => estudio.toJSON()) // Convierte cada estudio a un objeto JSON
        };
    }
}







