import "./allcards.css"
import ProductCard from "../../components/product/ProductCard";
import { useState, useContext } from "react"
import { Container, Spinner, Pagination } from "react-bootstrap";
import { ProductsContext } from "../../Context/ProductsContext";

const AllCards = () => {
    const { products, loading } = useContext(ProductsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

    return (
        <div className="allcards-container">
            <div className="homepage-page">
                {currentProducts.map((item, index) => (
                    <ProductCard key={index} entireproduct={item} />
                ))}
            </div>
            <div className="pagination-wrapper">
                <Pagination className="justify-content-center pagination-dark">
                    {[...Array(totalPages)].map((_, idx) => (
                        <Pagination.Item
                            key={idx + 1}
                            active={idx + 1 === currentPage}
                            onClick={() => handlePageChange(idx + 1)}
                        >
                            {idx + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
        </div>
    );
}

export default AllCards