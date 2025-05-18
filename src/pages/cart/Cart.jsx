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
            const ids = Object.keys(props.cartItems);

            const results = await Promise.all(
                ids.map(async (id) => {
                    const product = await getSingleProduct(id);
                    return {
                        ...product,
                        quantity: props.cartItems[id],
                    };
                })
            );

            setProducts(results);
            setLoading(false);
        }

        if (Object.keys(props.cartItems).length > 0) {
            loadProducts();
        } else {
            setProducts([]);
            setLoading(false);
        }
    }, [props.cartItems]);

    if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

    return (
        <Container className="cart-page">
            <Container className="cart-flex-wrap">
                {
                    products.map((item, index) => <CartItem quantity={item.quantity} image={item.card.imageUrl} key={index} removeFromCart={props.removeFromCart} id={item.card.multiverseid} ></CartItem>)
                }
            </Container>
        </Container>
    )
}

export default Cart