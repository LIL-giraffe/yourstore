import React, { useEffect, useState } from "react";
import SearchPage from "./SearchPage";

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
  // console.log(cloth)

  return (
    <div className='flex flex-wrap ml-32' >
      {cloth?.map(({img,type,rating,price,id})=>(
        <div className=' p-2 mx-6 shadow-lg' key={id}>
            <img src={img} className="w-full rounded-lg"/>
            
            <ul>
              <li>{type}</li>
              <li>{rating}</li>
              <li>{price}</li>
            </ul>
            
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
