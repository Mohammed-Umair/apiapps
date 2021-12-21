import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
const Postman = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?sort=desc")
      .then((responce) => setData(responce.data))
      .catch((error) => console.log(error));
  });

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((product) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} height="250px" />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.category}</Card.Text>
              {/* <Card.Text>{product.rating}</Card.Text> */}
              <Button variant="primary">{product.price}</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Postman;
