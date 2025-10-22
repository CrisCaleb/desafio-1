'use client';
import { useState, useEffect } from 'react';

export default function Pokemones() {
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        const obtenerPokemones = async () => {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5');
            const data = await res.json();
            const lista = [];
            for (const pokemon of data.results) {
            const detalleRes = await fetch(pokemon.url);
            const detalle = await detalleRes.json();
            lista.push({
                id: detalle.id,
                nombre: detalle.name,
                imagen: detalle.sprites.front_default
            });
            }
            setPokemones(lista);
        } catch (error) {
            console.error('Error al cargar Pokémon:', error);
        }
        };
        obtenerPokemones();
    }, []);

    return (
        <div style={{ marginTop: '30px' }}>
        <h2>Pokémon API</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {pokemones.map(pokemon => (
            <div key={pokemon.id} style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                <img src={pokemon.imagen} alt={pokemon.nombre} width="80" />
                <p>{pokemon.nombre}</p>
            </div>
            ))}
        </div>
        </div>
    );
}