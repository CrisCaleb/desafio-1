export default function Card({ nombre, edad, profesion }) {
    return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Edad:</strong> {edad}</p>
        <p><strong>Profesión:</strong> {profesion}</p>
    </div>
    );
}