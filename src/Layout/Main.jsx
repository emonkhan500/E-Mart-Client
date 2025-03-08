import React from 'react';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import SabNav from '../Shared/Nav/SabNav';

const Main = () => {
    return (
        <div className='w-full max-w-[1600px] px-4 md:px-8 lg:px-12 xl:px-16 mx-auto mb-9'>
            <Nav></Nav>
           
            <Outlet></Outlet>
           <Footer></Footer>
            
        </div>
    );
};

export default Main;