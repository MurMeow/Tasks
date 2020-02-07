import React from 'react';
import { BrowserRouter } from "react-router-dom";
import CommonLayout from "./layout/commonLayout/commonLayout";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CommonLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
