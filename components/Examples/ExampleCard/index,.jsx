export function ExampleCard({
  imgUrl = "https://i.pinimg.com/474x/6e/4f/9d/6e4f9dd1a5f8205bcba5688e9eb052cd.jpg",
  name = "Bordados",
}) {
  return (
    <div className="example_card">
      <h3>
        Example Card
        <div className="card_image">
          <img src={imgUrl} alt={name} />
        </div>
      </h3>

      <style jsx>{`
        .example_card {
          width: 33.33%;
        }
        .card_img {
          width: 10px;
        }
        img {
          width: 200px;
        }
      `}</style>
    </div>
  );
}
