import { useSelector } from "react-redux";
import { selectProductById } from "./productsSlice";
import { useParams } from "react-router-dom";
import "./_productDetail.scss";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => selectProductById(state, productId));
  const [displayImage, setDisplayImage] = useState(product && product?.imgs[0]);

  useEffect(() => {
    setDisplayImage(product && product?.imgs[0]);
  }, [product]);

  let content;

  content = (
    <>
      <div className="image-section">
        <div className="display-image">
          {<img src={displayImage} alt={product?.name} />}
        </div>
        <div className="images">
          {product?.imgs?.map((img, index) => (
            <img
              src={img}
              alt={product?.name}
              key={index}
              onClick={() => setDisplayImage(img)}
            />
          ))}
        </div>
      </div>
      <div className="information-section">
        <div className="basic-infos">
          <div className="info-name">
            <h1>{product?.name}</h1>
          </div>
          <div className="info-price">
            <p>${product?.price}</p>
          </div>
          <div className="info-qty">
            <div className="qty-header">
              <p>quantity</p>
            </div>
            <div className="qty-inputs">
              <button className="btn-less">-</button>
              <div className="qty-num">1</div>
              <button className="btn-add">+</button>
            </div>
          </div>
          <div className="info-btn">
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="dynamic-content">
          <div className="description">
            <div className="description-header">
              <p>description</p>
            </div>
            <div className="description-content">
              {product &&
                Object.values(product?.information?.description)?.map(
                  (data, index) => <p key={index}>{data}</p>
                )}
            </div>
          </div>
          {product?.information?.features && (
            <div className="features">
              <p>Features:</p>
              <ul className="features-list">
                {product &&
                  Object.values(product?.information?.features)?.map(
                    (data, index) => <li key={index}>{data}</li>
                  )}
              </ul>
            </div>
          )}

          {product?.information?.includes && (
            <div className="includes">
              <p>Includes:</p>
              <ul className="includes-list">
                {product &&
                  Object.values(product?.information?.includes)?.map(
                    (data, index) => <li key={index}>{data}</li>
                  )}
              </ul>
            </div>
          )}
          {product?.information?.addInfo && (
            <div className="addInfo">
              <p>{product?.information?.addInfo}</p>
            </div>
          )}
          {product?.information?.warning && (
            <div className="warning">
              <p>{product?.information?.warning}</p>
            </div>
          )}
          {product?.information?.incentives && (
            <div className="incentives">
              <div className="incentives-header">
                <p>Incentives</p>
              </div>
              <div className="incentives-content">
                <p>{product?.information?.incentives}</p>
              </div>
            </div>
          )}
          {product?.information?.recommend && (
            <div className="recommend">
              <p>{product?.information?.recommend}</p>
            </div>
          )}
          {product?.information?.installationGuide && (
            <div className="installation-guide">
              <div className="installation-guide-header">
                <p>Installation Guidance</p>
              </div>
              <div className="installation-guide-content">
                <p>{product?.information?.installationGuide}</p>
              </div>
            </div>
          )}

          {product?.information?.note && (
            <div className="note">
              <p>{product?.information?.note}</p>
            </div>
          )}
          {product?.information?.reminder && (
            <div className="reminder">
              <p>{product?.information?.reminder}</p>
            </div>
          )}
          {product?.information?.commercialProperties && (
            <div className="commercial-properties">
              <div className="commercial-properties-header">
                <p>Commercial Properties</p>
              </div>
              <div className="commercial-properties-content">
                <p>{product?.information?.commercialProperties}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return <section className="product-detail-section">{content}</section>;
};

export default ProductDetail;
