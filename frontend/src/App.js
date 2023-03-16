import React, { Suspense, createContext } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import routesData from "./routesData";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";
import Footer from "./containers/Footer";
import NotFoundPage from './containers/NotFoundPage';
import Login from './containers/Login';
import Signup from "./containers/Signup";
import "./App.scss";

const user = "asdfadfs";

function HasJWT() {
  let flag = false;
  localStorage.getItem("access") ? flag=true : flag=false
  return flag
}

const Layout = () =>(
  <div className="app">
        <Suspense fallback={null}>
          <div className="app__sidebar">
              <Sidebar/>
          </div>
          <div className="app__body">
              <Header/>
              <div className="app__body__content">
                <Outlet/>
              </div>
              <Footer/> 
          </div>
        </Suspense>
      </div>
)

export const UserContext = createContext(user);

export default function App() {
  return (
    <UserContext.Provider value={user}>
        <Routes>   
          <Route element={HasJWT() ? <Layout /> : <Navigate to="/login"/>}>
            {routesData.map((route) => (
              <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              element={ route.element }
              />
            ))}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="*" element={HasJWT() ? <NotFoundPage/> : <Navigate to="/login"/>}/>
        </Routes>
      
    </UserContext.Provider>
  );
}
