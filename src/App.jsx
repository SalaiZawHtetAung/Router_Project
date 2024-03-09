import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./page";
import NotFound from "./Not-Found";

const App = () => {
  // const { loading, error, data } = useFetch(GetBookData, "book");
  return (
    <div>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="*" element={NotFound}/>
      </Routes>
    </div>
  );
};
export default App;
