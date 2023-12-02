import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

const SearchResult = () => {
  const [cloth, setCloth] = useState();
  
  const clothData = async () => {
    const data = await fetch("http://localhost:3031/clothes");
    const json = await data.json();
    setCloth(json);
  };

  useEffect(() => {
    clothData();
  }, []);
  

  return (
    <div className="flex flex-wrap ml-32">
      {cloth?.map(({ img, type, rating, price, id }) => (
        <ProductCard
          img={img}
          type={type}
          rating={rating}
          price={price}
          id={id}
        />
      ))}
    </div>
  );
};

export default SearchResult;
