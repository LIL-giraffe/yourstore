import React from "react";
import { useNavigate } from "react-router-dom";


const Search = () => {
  const navigate=useNavigate()
  const handleChange=()=>{
    
  }
  const handleClick=(e)=>{
    e.preventDefault()
    navigate('/search')
  }
  return (
    <div >
      <div className="flex justify-center p-40 ">
        <input
          placeholder="search"
          type="text"
          className=" border border-black  w-[40%] border-r-0 p-2 rounded-l-xl "
          onMouseEnter={()=>handleChange}
        />
        <div className="border border-black border-l-0 p-2 rounded-r-xl">
          <button onClick={handleClick} >🔍 </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
