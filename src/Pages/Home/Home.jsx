import React from 'react';
import Banner from './Banner';
import Featured from './Featured';

const Home = () => {
    return (
        <div className=' lg:mt-10'>
            <Banner></Banner>
            <Featured></Featured>
        </div>
    );
};

export default Home;