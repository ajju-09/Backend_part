import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Headers/header';
import Footer from './components/Footer/footer';



function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout