import "./allcards.css"
import ProductCard from "../../components/product/ProductCard";
import { getAllProducts } from "../../assets/api-call-functions";
import { useEffect, useState } from "react"
import { Container, Spinner } from "react-bootstrap";

const AllCards = (props) => {
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getAllProducts();
            setProducts(data.cards.filter(item => item.imageUrl));
            function getRandomNumber() {
                return Math.floor(Math.random() * (150 - 15 + 1)) + 15;
            }
            setLoading(false);
        }
        loadProducts();
    }, [])

    if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

    return (
        <div className="homepage-page">
            {
                products.map((item, index) => <ProductCard addToCart={props.addToCart} key={index} id={item.multiverseid} img={item.imageUrl} name={item.name} rarity={item.rarity} type={item.type}></ProductCard>)
            }
        </div>
    )
}

export default AllCards