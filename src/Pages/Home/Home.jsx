import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className=' lg:mt-10 w-full max-w-[1586px] mx-auto'>
            <Banner></Banner>
            <Featured></Featured>
        <Footer></Footer>
        </div>
    );
};

export default Home;