import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({ img, type, rating, price, id }) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = (e) => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className=" relative p-2 mx-1 mb-4 shadow-lg" key={id}>
        <img src={img} className="w-full rounded-lg  " alt="there is nothing" />
        <button className="absolute top-4 right-4 " onClick={handleToggle}>
          {toggle ? (
            <FavoriteBorderIcon />
          ) : (
            <FavoriteBorderIcon style={{ color: "red" }} />
          )}
        </button>
        <ul className="mt-4">
          <li>{type}</li>
          <li>{rating}</li>
          <li>{price}</li>
        </ul>
        <div className="group  px-6 py-4  ">
          <button className="invisible group-hover:visible  px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
