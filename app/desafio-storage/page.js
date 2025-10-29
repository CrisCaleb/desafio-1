'use client';

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Componente Persona para Cookie
const PersonaCookie = () => {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('#3b82f6');
  const [tamanoLetra, setTamanoLetra] = useState(16);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    // Cargar datos de Cookie al montar
    const nombreGuardado = Cookies.get('nombre');
    const colorGuardado = Cookies.get('color');
    const tamanoGuardado = Cookies.get('tamanoLetra');
    const fotoGuardada = Cookies.get('foto');

    if (nombreGuardado) setNombre(nombreGuardado);
    if (colorGuardado) setColor(colorGuardado);
    if (tamanoGuardado) setTamanoLetra(Number(tamanoGuardado));
    if (fotoGuardada) setFoto(fotoGuardada);
  }, []);

  const guardarEnCookie = () => {
    Cookies.set('nombre', nombre, { expires: 7, path: '/' });
    Cookies.set('color', color, { expires: 7, path: '/' });
    Cookies.set('tamanoLetra', tamanoLetra.toString(), { expires: 7, path: '/' });
    Cookies.set('foto', foto, { expires: 7, path: '/' });
    alert('Datos guardados en Cookie!');
  };

  return (
    <div className="p-6 border-2 border-blue-400 rounded-lg mb-6 bg-blue-50">
      <h2 className="text-2xl font-bold mb-4">Persona - Cookie Storage</h2>
      
      <div className="space-y-4 mb-4">
        <div>
          <label className="block mb-2 font-semibold">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Ingresa tu nombre"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-2 border rounded h-12"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Tamaño de letra: {tamanoLetra}px</label>
          <input
            type="range"
            min="12"
            max="32"
            value={tamanoLetra}
            onChange={(e) => setTamanoLetra(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">URL de foto:</label>
          <input
            type="text"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="https://ejemplo.com/foto.jpg"
          />
        </div>
      </div>

      <button
        onClick={guardarEnCookie}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Guardar en Cookie
      </button>

      <div className="mt-6 p-4 bg-white rounded border-2" style={{ backgroundColor: color }}>
        <h3 className="font-bold mb-2" style={{ fontSize: `${tamanoLetra}px`, color: 'white' }}>
          Vista Previa
        </h3>
        {nombre && <p style={{ fontSize: `${tamanoLetra}px`, color: 'white' }}>Nombre: {nombre}</p>}
        {foto && <img src={foto} alt="Foto" className="mt-2 max-w-xs rounded" />}
      </div>
    </div>
  );
};

// Componente Persona para Local Storage
const PersonaLocalStorage = () => {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('#10b981');
  const [tamanoLetra, setTamanoLetra] = useState(16);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    // Cargar datos de Local Storage al montar
    const nombreGuardado = localStorage.getItem('nombreLS');
    const colorGuardado = localStorage.getItem('colorLS');
    const tamanoGuardado = localStorage.getItem('tamanoLetraLS');
    const fotoGuardada = localStorage.getItem('fotoLS');

    if (nombreGuardado) setNombre(nombreGuardado);
    if (colorGuardado) setColor(colorGuardado);
    if (tamanoGuardado) setTamanoLetra(Number(tamanoGuardado));
    if (fotoGuardada) setFoto(fotoGuardada);
  }, []);

  const guardarEnLocalStorage = () => {
    localStorage.setItem('nombreLS', nombre);
    localStorage.setItem('colorLS', color);
    localStorage.setItem('tamanoLetraLS', tamanoLetra.toString());
    localStorage.setItem('fotoLS', foto);
    alert('Datos guardados en Local Storage!');
  };

  return (
    <div className="p-6 border-2 border-green-400 rounded-lg mb-6 bg-green-50">
      <h2 className="text-2xl font-bold mb-4">Persona - Local Storage</h2>
      
      <div className="space-y-4 mb-4">
        <div>
          <label className="block mb-2 font-semibold">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Ingresa tu nombre"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-2 border rounded h-12"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Tamaño de letra: {tamanoLetra}px</label>
          <input
            type="range"
            min="12"
            max="32"
            value={tamanoLetra}
            onChange={(e) => setTamanoLetra(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">URL de foto:</label>
          <input
            type="text"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="https://ejemplo.com/foto.jpg"
          />
        </div>
      </div>

      <button
        onClick={guardarEnLocalStorage}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mb-4"
      >
        Guardar en Local Storage
      </button>

      <div className="mt-6 p-4 bg-white rounded border-2" style={{ backgroundColor: color }}>
        <h3 className="font-bold mb-2" style={{ fontSize: `${tamanoLetra}px`, color: 'white' }}>
          Vista Previa
        </h3>
        {nombre && <p style={{ fontSize: `${tamanoLetra}px`, color: 'white' }}>Nombre: {nombre}</p>}
        {foto && <img src={foto} alt="Foto" className="mt-2 max-w-xs rounded" />}
      </div>
    </div>
  );
};

// Componente Persona para Session Storage
const PersonaSessionStorage = () => {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('#f59e0b');
  const [tamanoLetra, setTamanoLetra] = useState(16);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    // Cargar datos de Session Storage al montar
    const nombreGuardado = sessionStorage.getItem('nombreSS');
    const colorGuardado = sessionStorage.getItem('colorSS');
    const tamanoGuardado = sessionStorage.getItem('tamanoLetraSS');
    const fotoGuardada = sessionStorage.getItem('fotoSS');

    if (nombreGuardado) setNombre(nombreGuardado);
    if (colorGuardado) setColor(colorGuardado);
    if (tamanoGuardado) setTamanoLetra(Number(tamanoGuardado));
    if (fotoGuardada) setFoto(fotoGuardada);
  }, []);

  const guardarEnSessionStorage = () => {
    sessionStorage.setItem('nombreSS', nombre);
    sessionStorage.setItem('colorSS', color);
    sessionStorage.setItem('tamanoLetraSS', tamanoLetra.toString());
    sessionStorage.setItem('fotoSS', foto);
    alert('Datos guardados en Session Storage!');
  };

  return (
    <div className="p-6 border-2 border-orange-400 rounded-lg mb-6 bg-orange-50">
      <h2 className="text-2xl font-bold mb-4">Persona - Session Storage</h2>
      
      <div className="space-y-4 mb-4">
        <div>
          <label className="block mb-2 font-semibold">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Ingresa tu nombre"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-2 border rounded h-12"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Tamaño de letra: {tamanoLetra}px</label>
          <input
            type="range"
            min="12"
            max="32"
            value={tamanoLetra}
            onChange={(e) => setTamanoLetra(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">URL de foto:</label>
          <input
            type="text"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="https://ejemplo.com/foto.jpg"
          />
        </div>
      </div>

      <button
        onClick={guardarEnSessionStorage}
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 mb-4"
      >
        Guardar en Session Storage
      </button>

      <div className="mt-6 p-4 bg-white rounded border-2" style={{ backgroundColor: color }}>
        <h3 className="font-bold mb-2" style={{ fontSize: `${tamanoLetra}px`, color: 'white' }}>
          Vista Previa
        </h3>
        {nombre && <p style={{ fontSize: `${tamanoLetra}px`, color: 'white' }}>Nombre: {nombre}</p>}
        {foto && <img src={foto} alt="Foto" className="mt-2 max-w-xs rounded" />}
      </div>
    </div>
  );
};

// Componente principal
export default function DesafioStoragePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Desafío de Guardado de Datos
      </h1>
      
      <div className="max-w-4xl mx-auto">
        <PersonaCookie />
        <PersonaLocalStorage />
        <PersonaSessionStorage />
        
        <div className="mt-8 p-6 bg-gray-800 text-white rounded-lg">
          <h3 className="text-xl font-bold mb-4">📚 Instrucciones:</h3>
          <ul className="space-y-2">
            <li>🍪 <strong>Cookie:</strong> Datos se guardan por 7 días (persisten al cerrar el navegador)</li>
            <li>💾 <strong>Local Storage:</strong> Datos persisten indefinidamente (incluso al cerrar el navegador)</li>
            <li>⏱️ <strong>Session Storage:</strong> Datos se borran al cerrar la pestaña/navegador</li>
          </ul>
        </div>
      </div>
    </div>
  );
}