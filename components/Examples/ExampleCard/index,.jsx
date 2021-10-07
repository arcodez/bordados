export function ExampleCard({
  imgUrl = "https://i.pinimg.com/474x/6e/4f/9d/6e4f9dd1a5f8205bcba5688e9eb052cd.jpg",
  name = "Bordados",
  type = "Bordado",
}) {
  return (
    <div className="example_card">
      {/* <h3>{type}</h3> */}
      <div className="card_image">
        <img src={imgUrl} alt={name} />
      </div>

      <style jsx>{`
        .example_card {
          background: var(--noche-clarac);
          box-shadow: var(--shadow);
          transition: 0.5s all ease;
          border-radius: 10px;
        }

        .example_card:hover {
          transform: scale(1.1);
        }

        .card_image {
          margin: 10px;
        }

        img {
          object-fit: cover;
          border-radius: 10px;
          width: 100%;
        }

        h3 {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
