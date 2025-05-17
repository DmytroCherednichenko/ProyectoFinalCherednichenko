import { Container, Spinner } from "react-bootstrap"
import "./cart.css"
import { useState, useEffect } from "react"

const Cart = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

    return (
        <Container className="cart-page">
            <h1>Your cart</h1>
            <Container className="cart-flex-wrap">
            </Container>
        </Container>
    )
}

export default Cart