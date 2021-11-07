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
        <div className="product-title">Franela Timbrada Chidori</div>

        <div className="product-price">100$</div>

        <div className="product-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae id
          consectetur doloribus ea repellendus nisi ullam consequatur atque,
          consequuntur officiis reprehenderit tenetur fugit dolores impedit quo
          laboriosam, sed vero eligendi. Illum animi officia hic doloribus quae
          aliquam vel delectus autem!
        </div>

        <div className="product-size">
          <h3>Tallas</h3>
          <ul className="sizes">
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            <li>XXL</li>
          </ul>
        </div>

        <div className="product-colors">
          <h3>Colores</h3>
          <ul className="colors">
            <li>Black</li>
            <li>White</li>
            <li>Green</li>
            <li>Red</li>
            <li>Brown</li>
          </ul>
        </div>

        <div className="quantity">Cantidad</div>

        <div className="button">
          <p className="total-price">100$</p>
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

        .info-product {
        }

        .colors,
        .sizes {
          display: flex;
          gap: 10px;
        }
        .button {
          display: grid;
          grid-template-columns: 0.2fr auto;
        }
        .total-price {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default SingleProduct;
