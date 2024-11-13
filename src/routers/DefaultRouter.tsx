import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginPage from "../pages/login/LoginPage";
import MainPage from "../pages/main/MainPage";
import LoginLayout from "../layouts/LoginLayout";
import ItemPage from "../pages/item/itemPage";

const DefaultRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginLayout />} />
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/item' element={<ItemPage />} />
      </Route>
    </Routes>
  );
};

export default DefaultRouter;
