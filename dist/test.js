"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./Persona");
const Estudio_1 = require("./Estudio");
// Crear estudios
const estudio1 = new Estudio_1.Estudio('Licenciatura en Informática', 'Universidad ABC', 2023);
const estudio2 = new Estudio_1.Estudio('Maestría en Desarrollo de Software', 'Universidad XYZ', 2025);
// Crear una persona
const persona = new Persona_1.Persona('43609195', 'Mariano', 'Oliva', 23, [estudio1, estudio2]);
// Mostrar la persona en formato JSON
console.log(persona.toJSON());
