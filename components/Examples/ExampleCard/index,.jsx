export function ExampleCard({
  imgUrl = "https://i.pinimg.com/474x/6e/4f/9d/6e4f9dd1a5f8205bcba5688e9eb052cd.jpg",
  name = "Bordados",
  type = "Bordado",
}) {
  return (
    <div className="image">
      <img src={imgUrl} alt="" />
      <style jsx>{`
        img {
          max-width: 100%;
        }

        .image {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 5px;
          outline: 3px solid white;
          outline-offset: -10px;
        }
      `}</style>
    </div>
  );
}
