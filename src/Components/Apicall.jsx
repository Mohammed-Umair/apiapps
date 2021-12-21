import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
const Apicall = () => {
  const [photo, setPhoto] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPhoto(res.data))
      .catch((error) => console.log("Show Error===>", error));
  }, []);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setUser(res.data))
      .catch((error) => console.log("Show Error===>", error));
  }, []);
  return (
    <div>
      <h1>Pull data from Api</h1>
      {photo.map((elem) => {
        return (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <td>{elem.name}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>UserName</th>
                <td>{elem.username}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Email</th>
                <td>{elem.email}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Phone</th>
                <td>{elem.phone}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Website</th>
                <td>{elem.website}</td>
              </tr>
            </tbody>
          </Table>
        );
      })}
      <div style={{ display: "flex", flexWrap: "wrap", margin: "5px" }}>
        {user.map((item) => {
          return (
            <div>
              <div>
                <img
                  src={item.thumbnailUrl}
                  alt=""
                  style={{
                    borderRadius: "100%",
                    border: "solid black 2px",
                    margin: "5px",
                  }}
                />
                <br />
                <button> {item.id}</button>
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Apicall;
