import React from 'react';
import "./Lista.css"; 

function myLista({ adicao, removeAdicao }) {
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
export default myLista;