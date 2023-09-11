import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/utils/Loading";
import EachCountry from "../component/EachCountry";

const CountryDetail = ({ darkMode }) => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.json();
      console.log(data[0]);
      setCountry(data[0]);
      setIsLoading(false);
    };

    getData();
  });

  return (
    <div>
      {!isLoading && <EachCountry country={country} />}
      {isLoading && <Loading darkMode={darkMode} />}
    </div>
  );
};

export default CountryDetail;
