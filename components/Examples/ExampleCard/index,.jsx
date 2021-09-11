export function ExampleCard({
  imgUrl = "https://i.pinimg.com/474x/6e/4f/9d/6e4f9dd1a5f8205bcba5688e9eb052cd.jpg",
  name = "Bordados",
  type = "Bordado",
}) {
  return (
    <div className="example_card">
      {/* <h3>{type}</h3> */}
      <figure className="card_image">
        <img src={imgUrl} alt={name} />
      </figure>

      <style jsx>{`
        .example_card {
          width: 33.33%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .card_image {
          width: 300px;
        }
        img {
          width: 100%;
          border-radius: 10px;
        }
        h3 {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
