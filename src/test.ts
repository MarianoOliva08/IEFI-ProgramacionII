import { Persona } from './Persona';
import { Estudio } from './Estudio';

// Crear estudios
const estudio1 = new Estudio('Licenciatura en Informática', 'Universidad ABC', 2023);
const estudio2 = new Estudio('Maestría en Desarrollo de Software', 'Universidad XYZ', 2025);

// Crear una persona
const persona = new Persona('43609195', 'Mariano', 'Oliva', 23, [estudio1, estudio2]);

// Mostrar la persona en formato JSON
console.log(persona.toJSON());



