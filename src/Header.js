import logo from "./images/logo.png"
export default function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
        </div>
    )
}