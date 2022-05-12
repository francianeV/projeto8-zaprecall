import React from "react";

export default function Perguntas(){
    const deckReact = [{pergunta:"O que é JSX?", resposta:"Uma extensão de linguagem do JavaScript"},
                       {pergunta:"O React é __ ", resposta: "Uma biblioteca JavaScript para construção de interfaces"},
                       {pergunta: "Componentes devem iniciar com __", resposta:"Letra maiúscula"},
                       {pergunta:"Podemos colocar __ dentro do JSX",resposta:"expressões"},
                       {pergunta:"O ReactDOM nos ajuda _", resposta:"interagindo com a DOM para colocar componentes React na mesma"},
                       {pergunta:"Usamos o npm para __", resposta:"gerenciar os pacotes necessários e suas dependências"},
                       {pergunta:"Usamos props para __",resposta:"passar diferentes informações para componentes"},
                       {pergunta:"Usamos estado (state) para __",resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},{test:"teste"},{test:"teste"},{test:"teste"}]
    
    const tamanho = deckReact.length;
    //const [tamanho, setTamanho] = React.useState(tamanhoObjeto);
    

    return(
        <ul className="lista-perguntas">
             {deckReact.map((pergunta, index) =>  (<Pergunta numPergunta={index+1} tamanho={tamanho} />))}
        </ul>
    );
}

function Pergunta({numPergunta, tamanho}){
    return(
        <li className="card">
            <span>Pergunta {numPergunta}</span>
            <img src="img/seta.png" alt="seta" />
            <span>{tamanho}</span>
        </li>
    );
}

