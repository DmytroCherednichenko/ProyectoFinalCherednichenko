import "./allcards.css"
import ProductCard from "../../components/product/ProductCard";
import { getAllProducts } from "../../assets/api-call-functions";
import { useEffect, useState, useContext } from "react"
import { Container, Spinner } from "react-bootstrap";
import { ProductsContext } from "../../Context/ProductsContext";

const AllCards = (props) => {
    const { products, loading } = useContext(ProductsContext);

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