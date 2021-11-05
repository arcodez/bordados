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
      </div>
      <div className="info-product">
        <div className="product-title">Franela Timbrada Chidori</div>
        <div className="product-price">100$</div>
        <div className="product-desc">
          Es una de las mejores Franelas del mercado
        </div>
        <div className="product-size"></div>
        <div className="button">
          <button>Add to Cart</button>
        </div>
      </div>
      <style jsx>{`
        img {
          max-width: 100%;
        }
        .single-product {
          display: grid;
          min-width: 100vh;
        }
        .gallery-product {
        }
        .info-product {
        }
      `}</style>
    </div>
  );
};

export default SingleProduct;
