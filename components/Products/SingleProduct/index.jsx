import React from "react";
import { Layout } from "../../Layout";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const SingleProduct = () => {
  return (
    <div className="single-product container">
      <div className="gallery-product">
        {/* <ImageGallery items={images} /> */}
        <img
          src="https://gt.epkweb.com/wp-content/uploads/2019/10/2190461-FRONT.jpg"
          alt="Single Product Gallery"
        />
      </div>

      <div className="info-product">
        <div className="product-title">
          <h1>Franela Timbrada Chidori</h1>
        </div>

        <div className="product-price">
          <h2>Precio: 100$</h2>
        </div>

        <div className="product-size">
          <h3>Tallas</h3>
          <select className="sizes">
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>

        <div className="product-colors">
          <h3>Colores</h3>
          <select className="colors">
            <option>White</option>
            <option>Black</option>
            <option>Green</option>
            <option>Red</option>
            <option>Brown</option>
          </select>
        </div>

        <div className="quantity">
          <h3>Cantidad: 2</h3>
        </div>

        <div className="product-description">
          <h2>Description</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae id
            consectetur doloribus ea repellendus nisi ullam consequatur atque,
            consequuntur officiis reprehenderit tenetur fugit dolores impedit
            quo laboriosam, sed vero eligendi. Illum animi officia hic doloribus
            quae aliquam vel delectus autem!
          </p>
        </div>

        <div className="button">
          <p className="total-price">200$</p>
          <button>Add to Cart</button>
        </div>
      </div>

      <style jsx>{`
        img {
          max-width: 100%;
        }

        .single-product {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          min-height: 80vh;
        }

        .gallery-product {
        }

        .gallery-product img {
          width: 100%;
        }

        .product-title {
          align-items: center;
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .product-title h1 {
          border-bottom: 3px solid var(--azul);
          margin: 0;
        }

        .product-price h2 {
          margin-bottom: 0;
        }

        .info-product {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .colors,
        .sizes {
          border-radius: 3px;
          cursor: pointer;
          padding: 15px;
          width: 100%;
        }

        .colors li {
          overflow: hidden;
          background: green;
          border-radius: 50%;
          padding: 30px;
          object-fit: cover;
        }

        .product-description h2 {
          margin-top: 0;
        }

        .button {
          align-items: center;
          display: flex;
          display: grid;
          grid-template-columns: 0.2fr auto;
          padding: 20px;
          gap: 10px;
        }

        .button button {
          background: var(--azul);
          border: none;
          border-radius: 10px;
          color: inherit;
          cursor: pointer;
          height: 80%;
        }

        .total-price {
          align-items: center;
          background: var(--azul);
          display: flex;
          font-size: 1.5rem;
          height: 80%;
          justify-content: center;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default SingleProduct;
