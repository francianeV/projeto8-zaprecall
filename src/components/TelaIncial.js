export default function TelaInicial({setGoPage}){
    return(
        <div className="tela-inicial">
            <img src="img/image_1.png" alt="logo" />
            <span>ZapRecall</span>
            <button onClick={() => setGoPage('perguntas')}><p>Iniciar Recall!</p></button>
        </div>
    );
}