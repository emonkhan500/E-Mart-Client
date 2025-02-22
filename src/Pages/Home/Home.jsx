import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import Footer from '../../Shared/Footer/Footer';
import UnderFeature from './UnderFeature';
import UpFooter from './UpFooter';
import Newsletter from './Newsletter';

const Home = () => {
    return (
        <div className=' lg:mt-10   '>
            <Banner></Banner>
            <Featured></Featured>
            <UnderFeature></UnderFeature>
            <Newsletter></Newsletter>
            <UpFooter></UpFooter>
        
        </div>
    );
};

export default Home;