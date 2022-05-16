import React from "react";
import Resposta from "./Resposta";

export default function Card({pergunta, index, resposta, respostas, setRespostas}) {

    const [clicou, SetClicou] = React.useState('escopo');
    
    const [vermelho, setVermelho] = React.useState(false);
    const [laranja, setLaranja] = React.useState(false);
    const [verde, setVerde] = React.useState(false);
    
    function fecharPergunta(){
        SetClicou('escopo');
    }

    function esqueceu(){
        setVermelho(true);
    }

    function quaseEsqueceu(){
        setLaranja(true);
    }

    function lembrou(){
        setVerde(true);
    }

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
        <li className="clicando">
            {clicou === 'perguntas' ? (<li className="perguntas">
                <div className="pergunta">{pergunta}</div>
                <img src="img/setinha.png" alt="virar" onClick={() => SetClicou('respostas')}/>
            </li>
            ) : clicou === 'escopo' ? (
                <li className="card" onClick={() => SetClicou('perguntas')}>
                    <div className="casca">
                        <span className={`pergunta-span ${classe}`}>Pergunta {index + 1}</span>
                        <img src={logo} alt="seta" />
                    </div>
                </li>) : clicou === 'respostas' ? (
                    <li className="respostas">
                        <div className="resposta">{resposta}</div>
                        <div className="resposta-escolha" onClick={() => {fecharPergunta()}}>
                            <div className="nao-lembrou"><span onClick={() => {esqueceu(); setRespostas([...respostas,{typeAnswer:'esqueceu'}])}}>Não lembro</span></div>
                            <div className="quase"><span onClick={() => {quaseEsqueceu(); setRespostas([...respostas,{typeAnswer:'quase'}])}}>Quase não lembrei</span></div>
                            <div className="lembrou"><span onClick={() => {lembrou(); setRespostas([...respostas,{typeAnswer:'lembrou'}])}}>Zap!</span></div>
                        </div>  
                    </li>) : ""}
        </li>
    );

    
}
