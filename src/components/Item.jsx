import React, { useState } from 'react';
import './Forms.css';

function Item({ adicao, removeAdicao }) {
    return (
        <ul>
            {adicao.map((adicao, index) => (
                <li key={index}>
                    {adicao}
                    <button onClick={() => removeAdicao(index)}>Remover</button>
                </li>
            ))}
        </ul>
    );
}

export default Item;