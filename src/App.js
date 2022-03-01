import Login from "./components/accounts/Login";
import DashBoard from "./components/dashboard/dashboard";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const { ...loginInfo } = useSelector((state) => state);
  return <div>{loginInfo.isLoggedIn ? <DashBoard /> : <Login />}</div>;
}

export default App;
