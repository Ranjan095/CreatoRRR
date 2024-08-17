// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import SingleProfile from "../singleProfile/SingleProfile";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path="/singleProfile" element={<SingleProfile />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
