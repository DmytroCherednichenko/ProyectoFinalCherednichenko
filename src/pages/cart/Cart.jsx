import { Container, Spinner } from "react-bootstrap"
import "./cart.css"
import { useState, useEffect, useContext } from "react"
import { getSingleProduct } from "../../assets/api-call-functions"
import CartItem from "../../components/cartitem/CartItem"
import { CartContext } from "../../Context/CartContext"

const Cart = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { cart, addToCart, emptyCart } = useContext(CartContext);


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

    console.log(cart);
    
    return (
        <Container className="cart-page">
            <Container className="cart-flex-wrap">
                <div>

                    <h1>Carrito de Compras</h1>
                    {cart.length > 0 ? (
                            cart.map((item, index) => <CartItem quantity={item.quantity} key={index} image={item.imageUrl} id={item.multiverseid}></CartItem>)
                    ) : (
                        <p>El carrito está vacío.</p>
                    )}
                    {cart.length > 0 && <button
                        onClick={emptyCart}>Vaciar Carrito</button>}
                </div>
            </Container>
        </Container >
    )
}

export default Cart