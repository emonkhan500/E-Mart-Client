import React from 'react';
import Welcome from './Welcome';
import Provide from './Provide';
import Glory from './Glory';
import Newsletter from '../Home/Newsletter';
import Address from './Address';
import Moto from './Moto';
import ShareHead from '../../Shared/ShareHead';

const About = () => {
    return (
        <div>
             <ShareHead  pageTitle={'About'}></ShareHead>
           <Welcome></Welcome>
           <Provide></Provide>
           <Moto></Moto>
           <Glory></Glory>
           <Address></Address>
           <Newsletter></Newsletter>
        </div>
    );
};

export default About;