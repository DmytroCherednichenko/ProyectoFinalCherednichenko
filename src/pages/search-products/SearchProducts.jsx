import { useContext, useState, useEffect } from "react";
import ProductCard from "../../components/product/ProductCard";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductsContext";

const SearchedProducts = () => {
    const { products } = useContext(ProductsContext);
    const { userInput } = useParams();
    const [searchedProducts, setSearchedProducts] = useState([]);

    useEffect(() => {
        if (userInput) {
            const input = userInput.toLowerCase();
            setSearchedProducts(
                products.filter(product =>
                    product.name && product.name.toLowerCase().includes(input)
                )
            );

        }
        console.log("userInput from URL:", typeof userInput);
    }, [userInput, products]);

    return (
        <div className="homepage-page">
            {searchedProducts.length > 0 ? (
                searchedProducts.map((item, index) => <ProductCard key={index} entireproduct={item}></ProductCard>)
            ) : (
                <div className="empty-cart-message">
                    <h2>We can't find your card</h2>
                    <p>Looks like we can't find the card you're looking for. Try changing the search input, maybe that helps</p>
                    <Link to="/allcards" className="btn btn-primary" id="shop-now-btn">Go back to All Cards</Link>
                </div>
            )}
            {

            }
        </div>
    )
}

export default SearchedProducts