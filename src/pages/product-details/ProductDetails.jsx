import React, { useEffect, useState, useContext } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { getSingleProduct } from '../../assets/api-call-functions'
import { useParams } from 'react-router-dom';
import './productdetails.css'
import { CartContext } from '../../Context/CartContext';
import { ProductsContext } from '../../Context/ProductsContext';


function ProductDetails(props) {

  const productId = useParams().id;
  console.log(productId);

  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  const { updateProduct, addProduct, deleteProduct, editProduct, productToEdit, setProductToEdit, products } = useContext(ProductsContext);


  useEffect(() => {
    async function loadProducts() {
      if (productId.length < 6) {
        const customProduct = products.find(p => p.id?.toString() === productId);
        if (customProduct) {
          setProduct(customProduct);
        }
        setLoading(false);
      } else {
        const data = await getSingleProduct(productId);
        setProduct(data.card);
        setLoading(false);
      }
    }
    loadProducts();
  }, [productId, products]);

  console.log(product);

  const allFormats = [
    "Standard",
    "Alchemy",
    "Brawl",
    "Pioneer",
    "Modern",
    "Legacy",
    "Vintage",
    "Commander",
    "Historic",
    "Explorer",
    "Pauper",
    "Penny",
    "Oathbreaker",
    "Gladiator",
    "Two-Headed Giant",
    "Planechase",
    "Conspiracy",
    "Tiny Leaders",
    "Momir",
    "Singleton",
    "Freeform",
    "Artisan"
  ];

  const legalFormatNames = product?.legalities?.map(item => item.format) || [];

  const nonLegalFormats = allFormats.filter(format => !legalFormatNames.includes(format));

  if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>


  return (
    <div className="product-details-container container-fluid">

      <div className="main-product-details-wrap">
        <div className="product-details-image-wrap">
          <div className="pd-img-wrap-center">
            <img className="pd-card-image" src={product.imageUrl} alt="" />
          </div>
        </div>
        <hr />
        <div className="product-details-info-wrap">
          <div className="pd-card-data-header">
            <i class="bi bi-book"> Card Name</i>
            <p>{product.name}</p>
          </div>
          <div className="pd-card-data-header">
            <i class="bi bi-flower3"> Mana Cost</i>
            <p>{product.manaCost}</p>
          </div>
          <div className="pd-card-data-header">
            <div className="pd-card-data-header">
              <i class="bi bi-text-wrap"> Type</i>
              <p>{product.type}</p>
            </div>
            <div className="pd-card-data-header">
              <i class="bi bi-diamond"> Rarity</i>
              <p>{product.rarity}</p>
            </div>
          </div>

          <hr />

          <div className="pd-card-data-header">
            <i class="bi bi-lightning-charge-fill"> Rules Text</i>
            <p>{product.originalText}</p>
          </div>
          {product.flavor && (
            <div className="pd-card-data-header">
              <i className="bi bi-egg-fried"> Flavor Text</i>
              <p>{product.flavor}</p>
            </div>
          )}

          <hr />

          <div className="pd-card-data-header">
            <div className="pd-card-artist-wrap">
              <i class="bi bi-brush"> Artist</i>
              <p>{product.artist}</p>
            </div>
            {product.power && (
              <div className="pd-card-power-wrap">
                <i class="bi bi-person-arms-up"> P/T</i>
                <p>{product.power}/{product.toughness}</p>
              </div>
            )}
          </div>

          <div className="pd-card-data-header">
            <div className="pd-card-set-wrap">
              <i class="bi bi-box"> Set</i>
              <p>{product.setName}</p>
            </div>
            <div className="pd-card-number-wrap">
              <i class="bi bi-123"> Number</i>
              <p>{product.number}</p>
            </div>
          </div>

          <div className="pd-card-data-header">
            <i class="bi bi-check-circle"> Legal formats</i>
            <p>{legalFormatNames.map((item) => <span>{`${item} `}</span>)}</p>
          </div>

          <div className="pd-card-data-header">
            <i class="bi bi-x-circle"> Not legal formats</i>
            <p>{nonLegalFormats.map((item) => <span>{`${item} `}</span>)}</p>
          </div>




        </div>


      </div>
    </div>
  )
}

export default ProductDetails