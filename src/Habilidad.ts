export interface IHabilidad {
    nombre: string;
    nivel: string; // Ej: "básico", "intermedio", "avanzado"
}

export class Habilidad implements IHabilidad {
    constructor(public nombre: string, public nivel: string) {}

    // Método para convertir habilidad a JSON
    toJSON(): string {
        return JSON.stringify({
            nombre: this.nombre,
            nivel: this.nivel
        });
    }
}
