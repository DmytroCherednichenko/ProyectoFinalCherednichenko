import { Row, Container, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-first-row">
                <div className="social-media-container">
                    <div className="social-media-item">
                        <a href="/">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                    <div className="social-media-item">
                        <a href="/">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                    <div className="social-media-item">
                        <a href="">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                    </div>
                    <div className="social-media-item">
                        <a href="">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                    <div className="social-media-item">
                        <a href="">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-second-row">
                <p>© 2025 Copyright: DmytroCherednichenko.com</p>
            </div>
        </div>
    );
}

export default Footer;