import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


export default function Fooditems() {
  const  {fooditems,loadingFooditems}  = useSelector((state) => state.food);
  const dispatch =useDispatch();
  
  return (
    <Container>
      {loadingFooditems ? (
        <div className="loader">
          <div
            type="Bars"
            color="#00BFFF"
            height={50}
            width={100}
            timeout={3000} //3 secs
          ></div>
        </div>
      ) : (
        fooditems.map((item, index) => {
          return (
            <Row className="m-100" key={index} mb={25}>
              <Col lg={8} md={10} sm={12} >
                
                  <Card>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Link to={`/${item.id}`} onClick={() => dispatchEvent({type: "GET_FOOD_DETAILS"})}>View detail</Link>
                    </Card.Body>
                  </Card>
                
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
}
