import { useSelector } from "react-redux";
import { selectProductById } from "./productsSlice";
import { useParams } from "react-router-dom";
import "./_productDetail.scss";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => selectProductById(state, productId));

  console.log(product);
  let content;

  content = (
    <>
      <div className="image-section">
        <div className="display-image">
          <img src={product?.imgs[0]} alt={product?.name} />
        </div>
        <div className="images">
          <img src="#" alt="" />
          <img src="#" alt="" />
          <img src="#" alt="" />
          <img src="#" alt="" />
          <img src="#" alt="" />
        </div>
      </div>
      <div className="information-section">
        <div className="basic-infos">
          <div className="info-name">
            <h1>{product.name}</h1>
          </div>
          <div className="info-price">
            <p>${product.price}</p>
          </div>
          <div className="info-qty">
            <button>-</button>
            <div className="qty-num">1</div>
            <button>+</button>
          </div>
          <div className="info-btn">
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="description">
          <p>{product?.information?.description}</p>
        </div>
        {product?.information?.features && (
          <div className="features">
            <ul className="features-list">
              {Object.values(product?.information?.features).map(
                (data, index) => (
                  <li key={index}>{data}</li>
                )
              )}
            </ul>
          </div>
        )}

        {product?.information?.includes && (
          <div className="includes">
            <p>includes:</p>
            <ul className="includes-list">
              {Object.values(product?.information?.includes).map(
                (data, index) => (
                  <li key={index}>{data}</li>
                )
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
            <p>{product?.information?.incentives}</p>
          </div>
        )}
        {product?.information?.installationGuide && (
          <div className="installation-guide">
            <p>{product?.information?.installationGuide}</p>
          </div>
        )}
        {product?.information?.note && (
          <div className="note">
            <p>{product?.information?.note}</p>
          </div>
        )}
        {product?.information?.recommend && (
          <div className="recommend">
            <p>{product?.information?.recommend}</p>
          </div>
        )}
        {product?.information?.reminder && (
          <div className="reminder">
            <p>{product?.information?.reminder}</p>
          </div>
        )}
        {product?.information?.commercialProperties && (
          <div className="commercial-properties">
            <p>{product?.information?.commercialProperties}</p>
          </div>
        )}
      </div>
    </>
  );

  return <section className="product-detail-section">{content}</section>;
};

export default ProductDetail;
