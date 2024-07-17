import React, { useState } from 'react';
import './Forms.css'; 

function myForms ({ adicionar }) {
    const [add, setAdd] = useState('');

    const addSubmit = (e) => {
        e.preventDefault();
        adicionar(add);
        setAdd('');
    };

    return (
        <form onSubmit={addSubmit}>
            <input type="text" value={add} onChange={(e) => setAdd(e.target.value)}
            placeholder="Adicionar seu prato favorito"></input>
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default myForms;