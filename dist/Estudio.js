"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudio = void 0;
class Estudio {
    constructor(titulo, institucion, anioFinalizacion) {
        this.titulo = titulo;
        this.institucion = institucion;
        this.anioFinalizacion = anioFinalizacion;
    }
    // Método para convertir el estudio a un objeto JSON
    toJSON() {
        return {
            titulo: this.titulo,
            institucion: this.institucion,
            anioFinalizacion: this.anioFinalizacion
        };
    }
}
exports.Estudio = Estudio;
