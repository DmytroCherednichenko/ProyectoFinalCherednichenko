import { Container, Button } from "react-bootstrap"
import "./productcard.css"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { toast } from "react-toastify";


const ProductCard = (props) => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`"${product.name}" added to cart successfully!`);
    };

    return (
        <Container fluid="sm" className="product-card">
            <div
                className="card-image-container"
                onClick={() => {
                    const id = props.entireproduct.multiverseid || props.entireproduct.id;
                    navigate(`/item/${id}`);
                }}
            >                <img className="card-item-image" src={props.entireproduct.imageUrl} alt={`An image of ${props.entireproduct.name}`} />
            </div>
            <h5 className="product-description">
                {props.entireproduct.name}
            </h5>
            <p className="product-description-type">{props.entireproduct.type}, {props.entireproduct.rarity}</p>
            <div className="price-button-wrap">
                <span className="item-price">
                    {props.entireproduct.price}
                </span>
                <Button variant="dark" onClick={() => handleAddToCart(props.entireproduct)}>
                    Add to Cart
                </Button>
            </div>

        </Container>
    )
}

export default ProductCard