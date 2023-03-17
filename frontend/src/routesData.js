import React from 'react';
import { Navigate } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Profile from './containers/Profile';
import MyBooks from './containers/MyBooks';
import Search from './containers/Search';
import Book from './containers/Book';

function HasJWT() {
  let flag = false;
  localStorage.getItem("access") ? flag=true : flag=false
  return flag
}

const data = [
  {
    id: 1,
    path: '/',
    exact: true,
    element: <HomePage/> ,
  },
  {
    id: 2,
    path: '/mybooks',
    exact: true,
    element: HasJWT() ? <MyBooks/> : <Navigate to="/login"/>,
  },
  {
    id: 3,
    path: '/profile',
    exact: true,
    element: HasJWT() ? <Profile/> : <Navigate to="/login"/>,
  },
  {
    id: 4,
    path: '/search',
    exact: true,
    element: <Search/>,
  },
  {
    id: 5,
    path: '/book/:id',
    exact: true,
    element: <Book/>,
  },
];

export default data;