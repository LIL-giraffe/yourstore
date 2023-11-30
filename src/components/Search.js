import React from "react";

const Search = () => {
  return (
    <div>
      <div className="flex justify-center p-40 ">
        <input
          placeholder="search"
          type="text"
          className=" border border-black  w-[40%] border-r-0 p-2 rounded-l-xl "
        />
        <div className="border border-black border-l-0 p-2 rounded-r-xl">
          <button>🔍 </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
