"use strict";
// src/Experiencia.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experiencia = void 0;
class Experiencia {
    constructor(puesto, empresa, inicio, // Ahora 'inicio' es un tipo 'Date'
    fin // 'fin' es opcional
    ) {
        this.puesto = puesto;
        this.empresa = empresa;
        this.inicio = inicio;
        this.fin = fin;
    }
    // Método para convertir experiencia a JSON
    toJSON() {
        return JSON.stringify({
            puesto: this.puesto,
            empresa: this.empresa,
            inicio: this.inicio,
            fin: this.fin
        });
    }
}
exports.Experiencia = Experiencia;
