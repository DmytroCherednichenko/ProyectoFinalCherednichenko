import { Container, Button } from "react-bootstrap"
import "./productcard.css"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const ProductCard = (props) => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Container fluid="sm" className="product-card">
            <div className="card-image-container" onClick={()=>navigate(`/item/${props.entireproduct.multiverseid}`)}>
                <img className="card-item-image" src={props.entireproduct.imageUrl} alt={`An image of ${props.entireproduct.name}`} />
            </div>
            <h5 className="product-description">
                {props.entireproduct.name}
            </h5>
            <p className="product-description-type">{props.entireproduct.type}, {props.entireproduct.rarity}</p>
            <div className="price-button-wrap">
                <span className="item-price">
                    {`${props.entireproduct.multiverseid[4]}${props.entireproduct.multiverseid[5]}`}
                </span>
                <Button variant="dark" onClick={()=> addToCart(props.entireproduct)}>
                    Add to Cart
                </Button>
            </div>

        </Container>
    )
}

export default ProductCard