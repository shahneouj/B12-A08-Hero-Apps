import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;