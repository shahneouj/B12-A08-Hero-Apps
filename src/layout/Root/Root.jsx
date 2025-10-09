import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
const Root = () => {
  const data = useLoaderData();
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;