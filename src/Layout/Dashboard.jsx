import React from 'react';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';
import ShareHead from '../Shared/ShareHead';

const Dashboard = () => {
    return (
        <div  className=' w-full max-w-[1600px] px-3 md:px-8 lg:px-12 xl:px-16 mx-auto mb-9'>
           <Nav></Nav>
           <ShareHead pageTitle={'DASHBOARD'}></ShareHead>
           <Footer></Footer>
        </div>
    );
};

export default Dashboard;