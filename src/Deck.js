import logo from "./images/image 1.png"
export default function Deck({setStart, setDeck, deckID}){
    if (deckID=== undefined || deckID=== ""){
    return(
        <div className="content">
                    <img src={logo} alt="Logo" />
                    <h1>Zap Recall</h1>
                    <select {e => setDeck(e.target.value)}>
                        <option value="" disabled selected hidden > Escolha seu deck</option>
                        <option value="0">JS</option>
                        <option value="1">Lolzinho</option>
                        <option value="2">O Maior de todos</option>
                    </select>
                    <button className="disabled" disabled >Iniciar Recall</button>
        </div>
    )
    }else{
        return(
            <div className="content">
                        <img src={logo} alt="Logo" />
                        <h1>Zap Recall</h1>
                        <select{e => setDeck(e.target.value)}>
                            <option value="" disabled selected hidden > Escolha seu deck</option>
                            <option value="0">JS</option>
                            <option value="1">Lolzinho</option>
                            <option value="2">O Maior de todos</option>
                        </select>
                <button onClick={setStart}>Iniciar Recall</button>
            </div>
        )
    }
}
