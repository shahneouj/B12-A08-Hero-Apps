import React from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Loder from "../../component/Loder/Loder";
const Root = () => {

  const navigation = useNavigation();

  return (
    <>
      <Header></Header>
      {navigation.loding ? <Loder></Loder> : <Outlet></Outlet>}
      <Footer></Footer>
    </>
  );
};

export default Root;