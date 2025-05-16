import { useEffect, useState } from "react"
import "./homepage.css"
import { getAllProducts } from "../../assets/api-call-functions";

const Homepage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadProducts() {
            const data = await getAllProducts();
            setProducts(data.cards);
            setLoading(false);
        }
        loadProducts();
    }, [])

    if (loading) return <div className="homepage-loading"><span className="loader"></span></div>;

    console.log(products)
    return (
        <div className="homepage-page">
            {
                products.map((item, index) => <p key={index}>{item.name}</p>)
            }
        </div>
    )
}

export default Homepage