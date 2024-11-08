// src/Experiencia.ts

export interface IExperiencia {
    puesto: string;
    empresa: string;
    inicio: Date;
    fin?: Date; // Fin puede ser opcional
}

export class Experiencia implements IExperiencia {
    constructor(
        public puesto: string,
        public empresa: string,
        public inicio: Date, // Ahora 'inicio' es un tipo 'Date'
        public fin?: Date  // 'fin' es opcional
    ) {}

    // Método para convertir experiencia a JSON
    toJSON(): string {
        return JSON.stringify({
            puesto: this.puesto,
            empresa: this.empresa,
            inicio: this.inicio,
            fin: this.fin
        });
    }
}


