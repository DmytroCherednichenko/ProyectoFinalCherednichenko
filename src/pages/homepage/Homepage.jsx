import { Container, Carousel } from "react-bootstrap"
import "./homepage.css"
import TopSellers from "../../components/topsellers/TopSellers";
import carousel_image_1 from "../../assets/hero-image.jpg"
import carousel_image_2 from "../../assets/car_img_2.jpg"
import carousel_image_3 from "../../assets/car_img_1.jpg"

const Homepage = () => {


    return (
        <Container className="homepage-page">
            <Container fluid className="carousel-wrapper">
                <Carousel>
                    <Carousel.Item>
                        <div className="carousel-image-wrapper">
                            <img className="carousel-image" src={carousel_image_1} alt="" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image-wrapper">
                            <img className="carousel-image" src={carousel_image_2} alt="" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image-wrapper">
                            <img className="carousel-image" src={carousel_image_3} alt="" />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <TopSellers></TopSellers>
            <Container className="homepage-main-wrapper">
            </Container>
        </Container >
    )
}

export default Homepage