"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habilidad = void 0;
class Habilidad {
    constructor(nombre, nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
    }
    // Método para convertir habilidad a JSON
    toJSON() {
        return JSON.stringify({
            nombre: this.nombre,
            nivel: this.nivel
        });
    }
}
exports.Habilidad = Habilidad;
