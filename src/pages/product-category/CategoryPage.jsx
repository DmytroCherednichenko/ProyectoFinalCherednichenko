import "./categorypage.css"
import { Container, Spinner } from "react-bootstrap"
import { useState, useEffect } from "react";
import { getAllProducts } from "../../assets/api-call-functions";
import ProductCard from "../../components/product/ProductCard";
import { useParams } from "react-router-dom";

const CategoryPage = (props) => {
  const [loading, setLoading] = useState(true);
  const [categoryUncommon, setCategoryUncommon] = useState([]);
  const {rarity} = useParams();

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    async function loadProducts() {
      const data = await getAllProducts();
      setCategoryUncommon(data.cards.filter(item => item.imageUrl && item.rarity === capitalizeFirstLetter(rarity)));
      setLoading(false);
    }
    loadProducts();
  }, [rarity])

  console.log(rarity)

  if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

  return (
    <div className="homepage-page">
      {
        categoryUncommon.map((item, index) => <ProductCard addToCart={props.addToCart} key={index} id={item.multiverseid} img={item.imageUrl} name={item.name} rarity={item.rarity} type={item.type}></ProductCard>)
      }
    </div>
  )
}

export default CategoryPage