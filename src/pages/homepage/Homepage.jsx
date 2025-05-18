import { Container, Spinner, Carousel } from "react-bootstrap"
import "./homepage.css"
import { useState } from "react";
import CarouselImage from "../../components/carouselimage/CarouselImage";

const Homepage = () => {
    const [loading, setLoading] = useState(false);

    if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

    return (
        <Container className="homepage-page">
            <Container fluid className="carousel-wrapper">
                <Carousel>
                    <Carousel.Item>
                        <CarouselImage image="src/assets/car_img_1.jpeg"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage image="src/assets/car_img_2.jpeg"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage image="src/assets/hero-image.jpg"/>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container className="homepage-main-wrapper">

            </Container>
        </Container >
    )
}

export default Homepage