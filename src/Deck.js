export default function Deck({setStart, setDeck}){
    return(
        <div className="content">
                    <img src="images/image 1.png" alt="Logo" />
                    <h1>Zap Recall</h1>
                    <select>
                        <option value="" disabled selected hidden > Escolha seu deck</option>
                        <option value="0" onClick={() => setDeck(0)}>JS</option>
                        <option value="1" onClick={() => setDeck(1)}>Lolzinho</option>
                        <option value="2" onClick={() => setDeck(2)}>O Maior de todos</option>
                    </select>
            <button onClick={setStart}>Iniciar Recall</button>
        </div>
    )
}
