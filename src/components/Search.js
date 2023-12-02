import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Search = () => {
  const [suggestions, setSuggestions] = useState([]);

  const handleMouseEnter = () => {
    setSuggestions([
      {
        id: 1,
        type: "T-Shirt",
        img: "data:image/jpeg;base64,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",
      },
      {
        id: 2,
        type: "Sweatshirt",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBpSLKhfkC-0-5vYKqrMKef1q2AMKv0EMPsqPcBwPBDm2FE18jbha7hNzUg&s"
      },
      {
        id: 3,
        type: "Sports jersey",
        img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRtDBHfkpN6u_M4g4KX8aUr1JJKHOpSpVkgUbD7CjzGV4tLLXyVLjWfepabiYsOr94Wjq_HkfTVWHrlQV6GpZfdRi73IJCx77qgrgHfkcTaKzNZT_SI341Y"
      },
      {
        id: 4,
        type: "Shirts",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIK_Wka-B6cy2IlwqtJ5w6UjwctIA49BwzFgySrrJ7Inae_wVb6yAye2WFg&s"
      },
      {
        id: 5,
        type: "Cargos",
        img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQksR7Ei6fPVTZs7xKACNJwIoFbNK8QQuU1_jwCTeFa9Er--2OGlyqRACvBRLPrlcn1plrrYUIwqqYIa3fXYn_nJDU5lpyHfsqiJlbh45lJDFnOHiIHnFO0"
      },
    ]);
  };

  const handleMouseLeave = () => {
    setSuggestions([]);
  };
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  // https://img.freepik.com/premium-photo/clothes-concept-women-wear-hanging-dried-tree-branch-shadow-shading-white-wall_34048-1552.jpg
  return (
    <div className="bg-[url('https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover w-full h-screen ">
      
        <div className="flex justify-center pt-40 pb-10 ">
          <input
            placeholder="search"
            type="text"
            className=" border border-black  w-[40%] border-r-0 p-2 rounded-l-xl "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div className="border border-black border-l-0 p-2 rounded-r-xl">
            <button onClick={handleClick}>🔍 </button>
          </div>
        </div>
        <div className="flex justify-center bg-green-100 mx-16  shadow-lg">
          {suggestions.map(({ id, img, type }) => (
            <div key={id}>
              <img src={img} alt="something" className="p-4 rounded-lg h-60" />
              <h1>{type}</h1>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default Search;
