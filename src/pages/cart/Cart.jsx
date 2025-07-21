import { Button, Container, Spinner } from "react-bootstrap"
import "./cart.css"
import { useContext } from "react"
import CartItem from "../../components/cartitem/CartItem"
import { CartContext } from "../../Context/CartContext"
import { Link } from 'react-router-dom';


const Cart = (props) => {
    const { cart, emptyCart } = useContext(CartContext);

    console.log(cart);

    return (
        <Container className="cart-page">
            <Container className="cart-flex-wrap">
                <div>
                    {cart.length > 0 ? (
                        cart.map((item, index) => <CartItem product={item} key={index}></CartItem>)
                    ) : (
                        <div className="empty-cart-message">
                            <h2>Your cart is empty</h2>
                            <p>Looks like you haven't added anything yet.</p>
                            <Link to="/allcards" className="btn btn-primary" id="shop-now-btn">Shop Now</Link>                        
                        </div>
                    )}
                    {cart.length > 0 && <Button variant="outline-danger" className="empty-cart-button"
                        onClick={emptyCart}>Empty the cart</Button>}
                </div>
            </Container>
        </Container >
    )
}

export default Cart