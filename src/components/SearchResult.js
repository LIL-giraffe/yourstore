import React, { useEffect, useState } from "react";

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
  console.log(cloth)

  return (
    <div>
      {cloth?.map((res)=>(
        <div>
            <img src={res.img}/>
            <p>{res.rating}</p>
            <h1>{res.price}</h1>
            
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
