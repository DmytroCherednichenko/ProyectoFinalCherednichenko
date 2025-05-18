import { Container, Button } from "react-bootstrap"
import "./productcard.css"

const ProductCard = (props) => {

    return (
        <Container fluid="sm" className="product-card">
            <div className="card-image-container">
                <img className="card-item-image" src={props.img} alt={`An image of ${props.name}`} />
            </div>
            <h5 className="product-description">
                {props.name}
            </h5>
            <p className="product-description-type">{props.type}, {props.rarity}</p>
            <div className="price-button-wrap">
                <span className="item-price">
                    {`${props.id[4]}${props.id[5]}`}
                </span>
                <Button variant="dark" onClick={()=>props.addToCart(props.id)}>
                    Add to Cart
                </Button>
            </div>

        </Container>
    )
}

export default ProductCard