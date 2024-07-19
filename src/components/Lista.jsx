import React from 'react';
import "./Lista.css";
import Item from "./Item"

function Lista({ adicao, removeAdicao }) {
     return (
          <Item adicao={adicao} removeAdicao={removeAdicao} />
     );
}
export default Lista;