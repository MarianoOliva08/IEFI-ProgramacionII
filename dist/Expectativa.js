"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expectativa = void 0;
class Expectativa {
    constructor(puestoDeseado, salarioEsperado, tipoContrato) {
        this.puestoDeseado = puestoDeseado;
        this.salarioEsperado = salarioEsperado;
        this.tipoContrato = tipoContrato;
    }
    // Método para convertir expectativa a JSON
    toJSON() {
        return JSON.stringify({
            puestoDeseado: this.puestoDeseado,
            salarioEsperado: this.salarioEsperado,
            tipoContrato: this.tipoContrato
        });
    }
}
exports.Expectativa = Expectativa;
