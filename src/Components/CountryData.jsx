import axios from "axios";
import React, { useState, useEffect } from "react";

const CountryData = () => {
  const [country, setCountry] = useState([]);
  const CName = async () => {
    const result = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/states"
    );
    // console.log(result.data.data);
    setCountry(result.data.data);
    console.log("Country====>", country);
  };
  useEffect(() => {
    CName();
  }, []);
  return (
    <div >
      <table >
        <tr>
          <th>Country Name</th>
          <th>ios3</th>
        </tr>
        {country.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.iso3}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CountryData;
