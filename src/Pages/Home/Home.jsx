import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className=' lg:mt-10'>
            <Banner></Banner>
            <Featured></Featured>
        <Footer></Footer>
        </div>
    );
};

export default Home;