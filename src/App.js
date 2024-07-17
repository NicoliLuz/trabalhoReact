import React, { useState } from 'react';
import myForms from './components/Forms';
import myLista from './components/Lista';
import './App.css'; 

function App() {
 const [add, setAdd] = useState([]);
 const adicionar = (add) => {
   setAdd([...adicionarPrato, add]);
 };

 const removeAdicao = (index) => {
   const newadicionarPrato = adicionarPrato.filter((_, i) => i !== index);
   setAdicao(newadicionarPrato);
 };

 return (
<div className="app">
<h1>Lista de Pratos Favoritos</h1>
<myForms myForms={myForms} />
<myLista adicionarPrato={adicionarPrato} removeAdicao={removeAdicao} />
</div>
 );
}
export default App;
