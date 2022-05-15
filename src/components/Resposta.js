export default function Resposta({ resposta }) {
    return (
        <li className="respostas">
            <div className="resposta">{resposta}</div>
            <div className="resposta-escolha">
                <div className="nao-lembrou"><span>Não lembro</span></div>
                <div className="quase"><span>Quase não lembrei</span></div>
                <div className="lembrou"><span>Zap!</span></div>
            </div>
        </li>
    );
}