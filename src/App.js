import React from "react";
import TelaInicial from "./components/TelaIncial";
import TelaPerguntas from "./components/TelaPerguntas";


export default function App(){
    
    const [goPage, setGoPage] = React.useState('home');

    return(
        <>
        {goPage === 'home' ? <TelaInicial setGoPage={setGoPage}/> : <TelaPerguntas />}
        </>
    );

}