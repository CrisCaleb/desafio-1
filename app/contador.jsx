'use client';
import { useState } from 'react';

export default function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);
    const reiniciar = () => setContador(0);

    return (
        <div style={{ margin: '20px 0', padding: '10px', border: '1px dashed #999' }}>
        <h2>Contador</h2>
        <p>Valor actual: {contador}</p>
        <button onClick={incrementar}>+1</button>
        <button onClick={decrementar} style={{ margin: '0 10px' }}>-1</button>
        <button onClick={reiniciar}>Reiniciar</button>
        </div>
    );
}