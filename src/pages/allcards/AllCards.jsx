import "./allcards.css"
import ProductCard from "../../components/product/ProductCard";
import { getAllProducts } from "../../assets/api-call-functions";
import { useEffect, useState } from "react"
import { Container, Spinner } from "react-bootstrap";

const AllCards = () => {
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);
    const [categoryUncommon, setCategoryUncommon] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getAllProducts();
            setProducts(data.cards.filter(item => item.imageUrl));
            setCategoryUncommon(data.cards.filter(item => item.rarity === "Uncommon"));
            setLoading(false);
        }
        loadProducts();
    }, [])

    if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

    return (
        <div className="homepage-page">
            {
                products.map((item, index) => <ProductCard img={item.imageUrl} name={item.name}></ProductCard>)
            }
        </div>
    )
}

export default AllCards