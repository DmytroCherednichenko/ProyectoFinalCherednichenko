import { Container, Spinner } from "react-bootstrap"
import "./cart.css"
import { useState, useEffect } from "react"
import { getSingleProduct } from "../../assets/api-call-functions"
import CartItem from "../../components/cartitem/CartItem"

const Cart = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProducts() {
            const results = await Promise.all(
                props.cartItems.map(id => getSingleProduct(id))
            );
            setProducts(results);
            setLoading(false);
        }

        if (props.cartItems.length > 0) {
            loadProducts();
        } else {
            setProducts([]);
            setLoading(false);
        }
    }, [props.cartItems]);

    console.log(products);

    if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

    return (
        <Container className="cart-page">
            <h1>Your cart</h1>
            <Container className="cart-flex-wrap">
                {
                    products.map((item, index) => <CartItem image={item.card.imageUrl} key={index} removeFromCart={props.removeFromCart} id={item.card.multiverseid} ></CartItem>)
                }
            </Container>
        </Container>
    )
}

export default Cart