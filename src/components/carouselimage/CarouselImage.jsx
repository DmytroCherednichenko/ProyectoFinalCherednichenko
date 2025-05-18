import "./carouselimage.css";

const CarouselImage = (props) => {
    return (
        <div className="carousel-image-wrapper">
            <img className="carousel-image" src={props.image} alt="" />
        </div>
    )
}

export default CarouselImage