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

            setLoading(false);
        }
        loadProducts();
    }, [])

    if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

    return (
        <div className="homepage-page">
            {
                products.map((item, index) => <ProductCard key={index} entireproduct={item}></ProductCard>)
            }
        </div>
    )
}

export default AllCards