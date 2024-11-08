export interface IEstudio {
    titulo: string;
    institucion: string;
    añoFinalizacion: number; // Año en que finalizó el estudio
}

export class Estudio implements IEstudio {
    constructor(
        public titulo: string,
        public institucion: string,
        public añoFinalizacion: number
    ) {}

    // Método para convertir el estudio a un objeto JSON
    toJSON(): object {
        return {
            titulo: this.titulo,
            institucion: this.institucion,
            anioFinalizacion: this.añoFinalizacion
        };
    }
}




