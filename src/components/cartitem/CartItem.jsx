import "./cartitem.css"
import { Container, Button } from "react-bootstrap"

const CartItem = (props) => {
    return (
        <Container className="cart-item-wrap">
            <div className="cart-item-image-wrapper">
                <img className="cart-item-image" src={props.image} alt="" />
            </div>
            <div className="cart-item-info-wrapper">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ratione.
            </div>
            <div className="cart-item-button-wrapper">
                <Button variant="outline-danger" onClick={() => props.removeFromCart(props.id)}>
                    Remove from cart
                </Button>
            </div>

        </Container>
    )
}

export default CartItem