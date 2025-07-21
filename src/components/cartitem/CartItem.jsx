import { useContext } from "react"
import "./cartitem.css"
import { Container, Button } from "react-bootstrap"
import { CartContext } from "../../Context/CartContext"


const CartItem = (props) => {

    const { increaseQuantity, decreaseQuantity, removeProduct } = useContext(CartContext);

    return (
        <Container className="cart-item-wrap">
            <div className="cart-item-image-wrapper">
                <img className="cart-item-image" src={props.product.imageUrl} alt="" />
            </div>
            <div className="cart-item-info-wrapper">
                <div className="pd-card-data-header">
                    <h5>{props.product.name}</h5>
                </div>
                {props.product.flavor && (
                    <div className="pd-card-data-header">
                        <p>{props.product.flavor}</p>
                    </div>
                )}
            </div>
            <div className="cart-item-quantity">
                <Button className="change-quantity-btn bg-dark" onClick={() => decreaseQuantity(props.product.id)}>
                    <i className="bi bi-caret-left-fill"></i>
                </Button>
                <span className="quantity-counter">{props.product.quantity}</span>
                <Button className="change-quantity-btn bg-dark" onClick={() => increaseQuantity(props.product.id)}>
                    <i className="bi bi-caret-right-fill"></i>
                </Button>
                <Button variant="outline-danger" onClick={() => removeProduct(props.product.id)}>Remove all</Button>

            </div>

        </Container>
    )
}

export default CartItem