export const images = [
  {
    img: "https://images.unsplash.com/photo-1631037513117-0494ee1e9226?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1631037513088-0694f5f7bc2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1631037513265-ddd7d9a09d56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1631037513117-0494ee1e9226?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1631037513265-ddd7d9a09d56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1631037513088-0694f5f7bc2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1631037513117-0494ee1e9226?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1631037513265-ddd7d9a09d56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
  },
];

const Image = ({
  img = "https://images.unsplash.com/photo-1631037513088-0694f5f7bc2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
}) => (
  <div className="image">
    <img src={img} alt="" />
    <style jsx>{`
      img {
        max-width: 100%;
      }
    `}</style>
  </div>
);

const gallery = () => (
  <div className="gallery">
    {images.map((image) => (
      <Image {...image} />
    ))}
    <style jsx>{`
      .gallery {
        width: 90%;
        margin: auto;
        columns: 5 300px;
        column-gap: 10px;
      }
    `}</style>
  </div>
);

export default gallery;
