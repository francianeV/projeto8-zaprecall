
export default function TelaPerguntas(){

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
        <>
        <Topo />
        <ul className="lista-perguntas">
            {deckReact.map((pergunta, index) =>  (<Pergunta numPergunta={index+1} />))}
        </ul>
        <Footer tamanho={tamanho}/>
        </>
    );
}

function Topo(){
    return(
        <div className="container-topo">
            <div className="topo-telaPerguntas">
                <img src="img/logo-pequeno.png" alt="logo" />
                <span>ZapRecall</span>
            </div>
        </div>
    );
}

function Pergunta({numPergunta}){
    return(
        <li className="card">
            <span>Pergunta {numPergunta}</span>
            <img src="img/seta.png" alt="seta" />
        </li>
    );
}

function Footer({tamanho}){
    return(
        <div className="footer-perguntas">
            <div className="contagem">0/{tamanho} CONCLUÍDOS</div>
        </div>
    );

}