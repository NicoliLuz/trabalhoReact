/*import React from 'react';
import "./Lista.css";

function Lista ({ adicao, removeAdicao, editarItem }) {
     return (
          <ul>
               {adicao.map((adicao, index) => (
                    <li key={index}>
                         {adicao}
                         <button onClick={() => editarItem(index, `Novo texto para ${index}`)}>
                              Editar
                         </button>
                         <button onClick={() => removeAdicao(index)}>Remover</button>
                    </li>
               ))}
          </ul>
     );
}

export default Lista;*/
import React from 'react';
import "./Lista.css";

function Lista({ adicao, removeAdicao, editarItem }) {
     const [editandoIndex, setEditandoIndex] = useState();
     const [novoTexto, setNovoTexto] = useState("");

     const Editando = (index, textoAtual) => {
          setEditandoIndex(index);
          setNovoTexto(textoAtual);
     };

     const handleSalvarEdicao = (index) {
          editarItem(index, novoTexto);
          setEditandoIndex(); 
          setNovoTexto("");
     };

     return (
          <ul>
               {adicao.map((adicao, index) => (
                    <li key={index}>
                         {editandoIndex === index ? (
                              <input
                                   type="text"
                                   value={novoTexto}
                                   onChange={(e) => setNovoTexto(e.target.value)}
                              />
                         ) : (
                              adicao
                         )}
                         {editandoIndex === index ? (
                              <button onClick={() => Editando(index)}>Salvar</button>
                         ) : (
                                   <button onClick={() => Editando(index, adicao)}>Editar</button>
                         )}
                         <button onClick={() => removeAdicao(index)}>Remover</button>
                    </li>
               ))}
          </ul>
     );
}

export default Lista;