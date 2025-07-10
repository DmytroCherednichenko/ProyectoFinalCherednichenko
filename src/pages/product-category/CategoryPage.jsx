import "./categorypage.css"
import { Container, Spinner } from "react-bootstrap"
import { useState, useEffect, useContext } from "react";
import { getAllProducts } from "../../assets/api-call-functions";
import ProductCard from "../../components/product/ProductCard";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { ProductsContext } from "../../Context/ProductsContext";

const CategoryPage = (props) => {
  const { rarity } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products, loading } = useContext(ProductsContext);


  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const category = products.filter(
    (item) => item.imageUrl && item.rarity === capitalizeFirstLetter(rarity)
  );

  if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

  return (
    <div className="homepage-page">
      {
        category.map((item, index) => <ProductCard key={index} entireproduct={item}></ProductCard>)
      }
    </div>
  )
}

export default CategoryPage