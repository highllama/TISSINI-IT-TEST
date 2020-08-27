import React, { useEffect } from "react";
//REACT ROUTER
import { Redirect } from "react-router-dom";
//STYLE
import "../assets/styles/components/Layout.scss";
//REDUX
import { getUserDataAction } from "../redux/authDuck";
import { useDispatch } from "react-redux";
import { getData } from "../redux/dataDuck";
//COOKIES
import cookie from "react-cookies";
//COMPONENTS
import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const authCookie = cookie.select(/authToken/);

  useEffect(() => {
    if (authCookie["authToken"]) {
      dispatch(getData());
      dispatch(getUserDataAction());
    }
  }, []);

  return authCookie["authToken"] ? (
    <div className="Layout">
      <Header />
      {children}
      <BottomNavBar />
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Layout;
