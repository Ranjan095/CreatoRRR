// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Creato_logo from "./assets/data/Creato_logo2.png";
import "./App.css";
import AllRoutes from "./components/allRoutes/AllRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold mx-4 my-2 text-red-500">CreatoRRR</h1> */}
      <Link to={"/"}>
        {" "}
        <div className="mx-4 my-2 object-cover">
          <img src={Creato_logo} className="w-[100px] h-[60px] rounded-md" />
        </div>
      </Link>

      <AllRoutes />
    </div>
  );
}

export default App;
