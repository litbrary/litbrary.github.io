import React, { Suspense, createContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import routesData from "./routesData";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";
import Footer from "./containers/Footer";
import NotFoundPage from './containers/NotFoundPage';
import Login from './containers/Login';
import Signup from "./containers/Signup";
import "./App.scss";

const user = "kevingunawan";

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
            <Route element={<Layout />}>
              {routesData.map((route) => (
                <Route
                key={route.id}
                exact={route.exact}
                path={route.path}
                element={route.element}
                />
              ))}
          </Route>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </UserContext.Provider>
  );
}
