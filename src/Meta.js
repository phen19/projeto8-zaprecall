export default function Meta({setMeta, meta, setGoToDeck}){
    if (meta=== undefined || meta=== ""){
    return(
            <div className="content">
                    <img src="images/image 1.png" alt="Logo" />
                    <h1>Zap Recall</h1>
                    <input placeholder="Digite sua meta de zaps..." value={meta} onInput={e => setMeta(e.target.value)}></input>
                    <button className="disabled" disabled >Iniciar Recall</button>
            </div>
    )
    }else{
        return(
            <div className="content">
                    <img src="images/image 1.png" alt="Logo" />
                    <h1>Zap Recall</h1>
                    <input placeholder="Digite sua meta de zaps..." value={meta} onInput={e => setMeta(e.target.value)}></input>
                    <button onClick={setGoToDeck} >Iniciar Recall</button>
            </div>
        )
    }
}
