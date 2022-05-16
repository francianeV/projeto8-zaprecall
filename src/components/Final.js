import React from "react";

export default function Fim(){

    const [acertou, setAcertou] = React.useState(true);

    function errouAlguma({respostas, setRespostas}){

    }
    //{acertou ? <AcertouTodas/> : <ErrouAlguma/>}

    return(
        <>
        <AcertouTodas />
        </>
    );

}


function AcertouTodas(){
    return(
        <div className="todas">
            <div className="topo-acertou">
                <img src="img/party.png" alt="parabéns" />
                <span>Parabéns!!!</span>
            </div>
            <div className="corpo-todas">
                <span>Você não esqueceu de nenhum flashcard!</span>
            </div>

        </div>
    );
}

function ErrouAlguma(){
    return(<div className="todas">
            <div className="topo-acertou">
                <img src="img/sad.png" alt="parabéns" />
                <span>Putz...</span>
            </div>
            <div className="corpo-todas">
                <span>Ainda faltam alguns...Mas não desanime!</span>
            </div>

        </div>);
}