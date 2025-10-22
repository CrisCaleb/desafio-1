'use client';
import { useState } from 'react';
import Card from "./card";
import Contador from "./contador";
import Pokemones from "./pokemones";
import StarWars from "./starwars";

const personasIniciales = [
  { id: 1, nombre: 'Ana López', edad: 25, profesion: 'Diseñadora UX' },
  { id: 2, nombre: 'Carlos Méndez', edad: 30, profesion: 'Desarrollador Frontend' },
  { id: 3, nombre: 'Lucía Torres', edad: 27, profesion: 'Analista de Datos' },
  { id: 4, nombre: 'Javier Ríos', edad: 35, profesion: 'Project Manager' },
  { id: 5, nombre: 'Mariana Cruz', edad: 29, profesion: 'QA Tester' }
];

const nombres = ['Luna', 'Kai', 'Zoe', 'Leo', 'Maya'];
const profesiones = ['Ingeniero', 'Artista', 'Médico', 'Docente', 'Músico'];

export default function Home() {
  const [personas, setPersonas] = useState(personasIniciales);

  const agregarPersona = () => {
    const nuevoId = personas.length > 0 ? Math.max(...personas.map(p => p.id)) + 1 : 1;
    const nuevaPersona = {
      id: nuevoId,
      nombre: nombres[Math.floor(Math.random() * nombres.length)],
      edad: Math.floor(Math.random() * 50) + 20,
      profesion: profesiones[Math.floor(Math.random() * profesiones.length)]
    };
    setPersonas([...personas, nuevaPersona]);
  };

  const eliminarUltima = () => {
    if (personas.length > 0) {
      setPersonas(personas.slice(0, -1));
    }
  };

  return (
    <>
      <h1>Hola UAB</h1>
      
      <Contador />
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={agregarPersona} style={{ marginRight: '10px' }}>Agregar Persona</button>
        <button onClick={eliminarUltima}>Eliminar Última</button>
      </div>

      {personas.map(persona => (
        <Card
          key={persona.id}
          nombre={persona.nombre}
          edad={persona.edad}
          profesion={persona.profesion}
        />
      ))}

      {/* Sección de Pokémon */}
      <Pokemones />

      {/* Sección de Star Wars */}
      <StarWars />
    </>
  );
}