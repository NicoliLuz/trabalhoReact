import React, { useState } from 'react';
import Forms from './components/Forms';
import Lista from './components/Lista';
import './App.css';
 
function App() {
  const [adicionarPrato, setAdicionarPrato] = useState([]);
 
  const adicionar = (prato) => {
    setAdicionarPrato([...adicionarPrato, prato]);
  };
 
  const removeAdicao = (index) => {
    const newAdicionarPrato = adicionarPrato.filter((_, i) => i !== index);
    setAdicionarPrato(newAdicionarPrato);
  };
 
  return (
<div className="app">
<h1>Lista de Pratos Favoritos</h1>
<Forms adicionar={adicionar} />
<Lista adicao={adicionarPrato} removeAdicao={removeAdicao} />
</div>
  );
}
 
export default App;