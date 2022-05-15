import React from "react";
import Card from "./Card";
import Resposta from "./Resposta";

export default function TelaPerguntas() {

    const perguntas = [{ pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { pergunta: "O React é __ ", resposta: "Uma biblioteca JavaScript para construção de interfaces" },
    { pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula" },
    { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
    { pergunta: "O ReactDOM nos ajuda _", resposta: "interagindo com a DOM para colocar componentes React na mesma" },
    { pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências" },
    { pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes" },
    { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }];


    perguntas.sort(randomize);

    function randomize() {
        return Math.random() - 0.5;
    }

    const tamanho = perguntas.length;

    return (
        <>
            <Topo />
            <ul className="lista-perguntas">
                {perguntas.map(resp => <Resposta resposta={resp.resposta} />)}
            </ul>
            <Footer tamanho={tamanho} />
        </>
    );
}

function Topo() {
    return (
        <div className="container-topo">
            <div className="topo-telaPerguntas">
                <img src="img/logo-pequeno.png" alt="logo" />
                <span>ZapRecall</span>
            </div>
        </div>
    );
}

function Footer({ tamanho }) {
    return (
        <div className="footer-perguntas">
            <div className="contagem">0/{tamanho} CONCLUÍDOS</div>
        </div>
    );

}