import logo from "../assets/logo.png"
import "../styles/Footer.css"

const Footer = () => {
    return <footer>
        <div className="footer-grid">
            <img src={logo} alt="logo" className="logo" />
        </div>
    </footer>
}

export default Footer