import React, { useState } from 'react';
import './Forms.css'; 

function Forms ({ adicionar }) {
    const [add, setAdd] = useState('');

    const addSubmit = (e) => {
        e.preventDefault(); /*preventDefault é chamado no evento ao enviar o formulário para evitar um reload/refresh do navegador*/
        adicionar(add);
        setAdd('');
    };

    return (
        <form onSubmit={addSubmit}>
            <input type="text" value={add} onChange={(e) => setAdd(e.target.value)}
            placeholder="Adicionar prato favorito"></input>
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default Forms;