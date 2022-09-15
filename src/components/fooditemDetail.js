import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";


export default function FooditemDetails() {
  const { food, loadingFoodDetails } = useSelector(
    (state) => state.food
  );

  return (
    <Container>
      {loadingFoodDetails ? (
        <div className="loader">
          <div
            type="Bars"
            color="#00BFFF"
            height={50}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      ) : (
        <Row className="posts">
          <Col lg={8} md={10} sm={12}>
            <h1>{food.name}</h1>
            <div>{food.description}</div>
          </Col>
        </Row>
      )}
    </Container>
  );
}
