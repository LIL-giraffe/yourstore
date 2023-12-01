import React from "react";
import SearchResult from "./SearchResult";
import Sidebar from "./Sidebar";

const SearchPage = () => {
  return (
    <div>
      <div className="flex justify-center p-28  ">
        <input
          placeholder="search"
          type="text"
          className=" border border-black  w-[40%] border-r-0 p-2 rounded-l-xl "
        />
        <div className="border border-black border-l-0 p-2 rounded-r-xl">
          <button>🔍 </button>
        </div>
      </div>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="ml-32 pb-4 ">
          <SearchResult />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
