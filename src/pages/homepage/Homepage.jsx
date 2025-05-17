import { Container, Spinner } from "react-bootstrap"
import "./homepage.css"
import { useState } from "react";

const Homepage = () => {
    const [loading, setLoading] = useState(false);

    if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

    return (
        <Container className="homepage-page">
            <div className="hero-wrapper">
                <img className="hero-image" src="src/assets/hero-image.jpg" alt="" />
            </div>
        </Container>
    )
}

export default Homepage