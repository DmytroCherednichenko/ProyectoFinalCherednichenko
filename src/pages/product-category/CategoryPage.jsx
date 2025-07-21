import "./categorypage.css"
import { Container, Spinner } from "react-bootstrap"
import { useContext } from "react";
import ProductCard from "../../components/product/ProductCard";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductsContext";

const CategoryPage = () => {
  const { rarity } = useParams();
  const { products, loading, error } = useContext(ProductsContext);


  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const category = products.filter(
    (item) => item.imageUrl && item.rarity === capitalizeFirstLetter(rarity)
  );

  if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

  if (!loading && error) {
    return (
      <Container className="homepage-loading text-center py-5">
        <h4>{error}</h4>
      </Container>
    );
  }
  return (
    <div className="homepage-page">
      {
        category.map((item, index) => <ProductCard key={index} entireproduct={item}></ProductCard>)
      }
    </div>
  )
}

export default CategoryPage