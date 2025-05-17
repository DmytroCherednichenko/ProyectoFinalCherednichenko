import { Container, Button } from "react-bootstrap"
import "./productcard.css"

const ProductCard = (props) => { //takes img, name

    //No tengo prcio en el API entonces lo simulo
    function getRandomNumber() {
        return Math.floor(Math.random() * (150 - 15 + 1)) + 15;
    }

    return (
        <Container fluid="sm" className="product-card">
            <div className="card-image-container">
                <img className="card-item-image" src={props.img} alt={`An image of ${props.name}`} />
            </div>
            <h5 className="product-description">
                {props.name}
            </h5>
            <div className="price-button-wrap">
                <span className="item-price">
                    {getRandomNumber()}
                </span>
                <Button variant="dark">
                    Add to Cart
                </Button>
            </div>

        </Container>
    )
}

export default ProductCard