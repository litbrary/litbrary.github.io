import React from 'react';
import HomePage from './containers/HomePage';
import Profile from './containers/Profile';
import MyBooks from './containers/MyBooks';
import Search from './containers/Search';
import Book from './containers/Book';

const data = [
  {
    id: 1,
    path: '/',
    exact: true,
    element: <HomePage/>,
  },
  {
    id: 2,
    path: '/mybooks',
    exact: true,
    element: <MyBooks/>,
  },
  {
    id: 3,
    path: '/profile',
    exact: true,
    element: <Profile/>,
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