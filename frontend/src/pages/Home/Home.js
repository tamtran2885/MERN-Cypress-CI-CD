import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import categories from "../../data/categories";
import "./Home.css";
import axios from "../../services/axios";
import { updateProducts } from "../../features/productSlice";
import ProductPreview from "../../components/ProductPreview/ProductReview";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const latestProducts = products.slice(0, 8);
  const auth = JSON.parse(localStorage.getItem("persist:root"));
  // console.log(auth.user);

  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);

  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1489348611450-4c0d746d949b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
        className="home-banner"
      />
      <div className="featured-products-container container mt-4">
        <h2 className="text-center">Last products</h2>
        {/* Last products here */}
        <div className="d-flex justify-content-center flex-wrap">
          {latestProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more {">>"}
          </Link>
        </div>
      </div>

      {/* sale Banner */}
      <div className="sale_banner--container mt-4">
        <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      </div>
      <div className="recent-products-container container mt-4">
        <h2 className="text-center">Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={4}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
