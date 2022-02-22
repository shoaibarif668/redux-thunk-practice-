import React from "react"
import {Routes,Route} from "react-router";
import Home from "./pages/home";
import Users from "./pages/users";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
              {/*<Route index element={<Home/>}/>*/}
      </Routes>
    </>
  );
}

export default App;
