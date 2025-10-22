'use client';
import { useState, useEffect } from 'react';

export default function StarWars() {
    const [personajes, setPersonajes] = useState([]);
    const [filtrados, setFiltrados] = useState([]);
    const [orden, setOrden] = useState('nombre'); // 'nombre' o 'altura'
    const [genero, setGenero] = useState('todos'); // 'male', 'female', 'todos'
    const [especie, setEspecie] = useState('todos'); // 'human', 'droid', 'todos'
    const [pelicula, setPelicula] = useState('todas'); // '1', '2', ..., 'todas'

    useEffect(() => {
        const cargarPersonajes = async () => {
        try {
            const res = await fetch('https://swapi.dev/api/people/');
            const data = await res.json();
            setPersonajes(data.results);
            setFiltrados(data.results);
        } catch (error) {
            console.error('Error:', error);
        }
        };
        cargarPersonajes();
    }, []);

    useEffect(() => {
        let resultado = [...personajes];

        // Filtro por género
        if (genero !== 'todos') {
        resultado = resultado.filter(p => p.gender === genero);
        }

        // Filtro por especie (human/droid)
        if (especie !== 'todos') {
        const especieMap = {
            human: 'Human',
            droid: 'Droid'
        };
        resultado = resultado.filter(p => {
            // Extraer especie desde la URL
            return p.species.length > 0 && p.species[0].includes(especieMap[especie]);
        });
        }

        // Filtro por película
        if (pelicula !== 'todas') {
        const filmUrl = `https://swapi.dev/api/films/${pelicula}/`;
        resultado = resultado.filter(p => p.films.some(f => f === filmUrl));
        }

        // Ordenar
        resultado.sort((a, b) => {
        if (orden === 'nombre') {
            return a.name.localeCompare(b.name);
        } else if (orden === 'altura') {
            return parseFloat(a.height) - parseFloat(b.height);
        }
        return 0;
        });

        setFiltrados(resultado);
    }, [personajes, orden, genero, especie, pelicula]);

    return (
        <div style={{ marginTop: '30px' }}>
        <h2>Personajes de Star Wars</h2>

        {/* Controles */}
        <div style={{ marginBottom: '20px' }}>
            <label>Ordenar por: </label>
            <button onClick={() => setOrden('nombre')}>Nombre</button>
            <button onClick={() => setOrden('altura')} style={{ marginLeft: '10px' }}>Altura</button>

            <div style={{ marginTop: '10px' }}>
            <label>Género: </label>
            <select onChange={(e) => setGenero(e.target.value)} value={genero}>
                <option value="todos">Todos</option>
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
            </select>

            <label style={{ marginLeft: '10px' }}>Especie: </label>
            <select onChange={(e) => setEspecie(e.target.value)} value={especie}>
                <option value="todos">Todos</option>
                <option value="human">Humanos</option>
                <option value="droid">Robots</option>
            </select>

            <label style={{ marginLeft: '10px' }}>Película: </label>
            <select onChange={(e) => setPelicula(e.target.value)} value={pelicula}>
                <option value="todas">Todas</option>
                {[1,2,3,4,5,6].map(n => (
                <option key={n} value={n}>Episodio {n}</option>
                ))}
            </select>
            </div>
        </div>

        {/* Tarjetas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filtrados.map((p, i) => (
            <div key={i} style={{ border: '1px solid #ccc', padding: '10px' }}>
                <strong>{p.name}</strong> | Altura: {p.height} cm | Género: {p.gender} | Peso: {p.mass}
            </div>
            ))}
        </div>
        </div>
    );
}