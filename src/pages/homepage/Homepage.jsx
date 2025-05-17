import { useEffect, useState } from "react"
import "./homepage.css"
import { getAllProducts } from "../../assets/api-call-functions";
import { data } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard"; 

const Homepage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
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

    if (loading) return <div className="homepage-loading"><span className="loader"></span></div>;

    console.log(products);
    console.log(categoryUncommon);

    return (
        <div className="homepage-page">
            {
                products.map((item, index) => <ProductCard img={item.imageUrl} name={item.name}></ProductCard>)
            }
        </div>
    )
}

export default Homepage