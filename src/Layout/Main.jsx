import React from 'react';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-[1586px] mx-auto '>
            <Nav></Nav>
            <Outlet></Outlet>
           
            
        </div>
    );
};

export default Main;