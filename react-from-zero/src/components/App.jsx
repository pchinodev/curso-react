import React, { useState, useEffect } from "react";

function App() {
  const [usuario, setUsuario] = useState("");
  const [count, setCount] = useState(0);
  const [usuarios, setUsuarios] = useState(["Pablo", "João", "Maria"]);

  const handleAddUser = () => {
    setUsuarios([...usuarios, usuario]);
    setUsuario("");
  };

  useEffect(() => {
    setCount(usuarios.length);
  }, [usuarios]);

  return (
    <div>
      <h1>Hello DIO!</h1>
      <h3>Total: {count}</h3>

      <input
        value={usuario}
        onChange={(event) => setUsuario(event.target.value)}
      />

      <button onClick={handleAddUser}>Agregar usuario</button>

      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>{usuario}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
