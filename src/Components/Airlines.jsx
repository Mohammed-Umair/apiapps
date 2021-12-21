import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Airlines = () => {
  const [air, setAir] = useState([]);
  const Info = async () => {
    const result = await axios.get(
      "https://api.instantwebtools.net/v1/airlines"
    );
    setAir(result.data);
  };
  useEffect(() => {
    Info();
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {air.map((elem) => {
          return (
            <div
              style={{
                border: "solid black 4px",
                borderRadius: "5px",
                margin: "10px",
              }}
            >
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={elem.logo} height="200px" />
                <Card.Body>
                  <Card.Title>Name:{elem.name}</Card.Title>
                  <Card.Text>
                    Country: <mark>{elem.country}</mark>
                  </Card.Text>
                  <Card.Text>
                    <p>
                      website: <a href="">{elem.website}</a>{" "}
                    </p>
                  </Card.Text>
                  <Card.Text>Established:{elem.established}</Card.Text>
                  <Button variant="primary"> ID: {elem.id}</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Airlines;
