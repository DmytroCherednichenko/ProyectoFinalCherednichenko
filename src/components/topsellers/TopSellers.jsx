import { Container } from 'react-bootstrap'
import "./topsellers.css"
import { useContext, useRef, useState } from 'react'
import { ProductsContext } from '../../Context/ProductsContext'
import { useNavigate } from 'react-router-dom';



function TopSellers() {
    const { products } = useContext(ProductsContext);
    const topSellers = products.slice(10, 20)
    const galleryRef = useRef(null)
    const navigate = useNavigate();


    const scroll = (direction) => {
        if (galleryRef.current) {
            const scrollAmount = direction === 'left' ? -320 : 320
            galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    return (
        <Container fluid className='top-sellers-main-wrap'>
            <h4 className="homepage-h4">Top Sellers</h4>
            <div className='top-sellers-scroll-wrapper'>
                <button className='scroll-btn left' onClick={() => scroll('left')}><i class="bi bi-caret-left-fill"></i></button>

                <div className='top-sellers-gallery' ref={galleryRef}>
                    {topSellers.map(product => (
                        <div key={product.id} className='top-seller-item' onClick={()=>navigate(`/item/${product.multiverseid}`)}>
                            <img src={product.imageUrl} alt={product.name} />
                            <p>{product.name}</p>
                        </div>
                    ))}
                </div>

                <button className='scroll-btn right' onClick={() => scroll('right')}><i class="bi bi-caret-right-fill"></i></button>
            </div>
        </Container>
    )
}

export default TopSellers