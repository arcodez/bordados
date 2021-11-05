export const CarouselItem = ({
  name = "Rock and Roll Hall of Fame",
  img = "https://mymodernmet.com/wp/wp-content/uploads/2020/06/needle-painting-embroidery-emillie-ferris-12.jpg",
}) => (
  <div className="carousel__elemento">
    <img src={img} alt={name} />

    <p>{name}</p>
    <style jsx>{`
      .carousel__elemento {
        text-align: center;
        margin: 0 10px;
        border-radius: 20px;
        background: var(--noche-clarac);
      }
      img {
        border-radius: 20px;
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
    `}</style>
  </div>
);
