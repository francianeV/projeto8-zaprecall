import React from "react";
import Resposta from "./Resposta";

export default function Card({pergunta, index, respostas}) {

    const [clicou, SetClicou] = React.useState(false);
    const [resposta, setResposta] = React.useState(false);
    const [vermelho, setVermelho] = React.useState(false);
    const [laranja, setLaranja] = React.useState(false);
    const [verde, setVerde] = React.useState(false);


    let classe="";
    let logo="img/seta.png";

    if(vermelho === true){
        classe = "resposta-vermelha";
        logo = "img/esqueceu.png";

    }else if(laranja === true){
        classe = "resposta-laranja";
        logo = "img/quase.png";

    } else if(verde === true){
        classe = "resposta-verde";
        logo = "img/zap.png";
    }

    return (
        <li className="clicando" onClick={() => SetClicou(!clicou)}>
        {clicou ? (<li className="perguntas">
                    <div className="pergunta">{pergunta}</div>
                    <img src="img/setinha.png" alt="virar" onClick={() => setResposta(true)}/>
                  </li>
                  ): (
                  <li className="card">
                    <div className="casca">
                    <span className={`pergunta-span ${classe}`}>Pergunta {index + 1}</span>
                    <img src={logo} alt="seta"/>
                    </div> 
                  </li>)}
                  {resposta ? (<li className="respostas">
                        <div className="resposta">{respostas}</div>
                        <div className="resposta-escolha">
                            <div className="nao-lembrou"><span onClick={() => {setResposta(false); setVermelho(true)}}>Não lembro</span></div>
                            <div className="quase"><span onClick={() => {setLaranja(true); setResposta(false)}}>Quase não lembrei</span></div>
                            <div className="lembrou"><span onClick={() => {setVerde(true); setResposta(false);}}>Zap!</span></div>
                        </div>
                    </li>) : ""}
        </li>
    );

    
}
