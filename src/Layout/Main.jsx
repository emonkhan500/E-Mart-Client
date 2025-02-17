import React from 'react';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-full max-w-[1586px] px-4 md:px-8 lg:px-12 xl:px-16 mx-auto '>
            <Nav></Nav>
            <Outlet></Outlet>
           
            
        </div>
    );
};

export default Main;