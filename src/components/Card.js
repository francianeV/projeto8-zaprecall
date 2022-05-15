import React from "react";

export default function Card({pergunta, index}) {

    const [clicou, SetClicou] = React.useState(false);
    return (
        <li className="clicando" onClick={() => SetClicou(!clicou)}>
        {clicou ? (<li className="perguntas">
                    <div className="pergunta">{pergunta}</div>
                    <img src="img/setinha.png" alt="virar" />
                  </li>
                  ): (
                  <li className="card">
                    <div className="casca">
                    <span>Pergunta {index + 1}</span>
                    <img src="img/seta.png" alt="seta" />
                    </div>
                  </li>)}
        
        </li>
    );
}