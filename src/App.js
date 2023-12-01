// import './App.css';

import Search from "./components/Search"
import SearchPage from "./components/SearchPage";
// import SearchResult from "./components/SearchResult";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Search/>}></Route>
          <Route path="/search" element={<SearchPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
