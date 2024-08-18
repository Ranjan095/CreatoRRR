// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import SingleProfile from "../singleProfile/SingleProfile";
import Edit_profile from "../edit/Edit_profile";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path="/:id" element={<SingleProfile />} />
        <Route path="/:id/edit" element={<Edit_profile />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
