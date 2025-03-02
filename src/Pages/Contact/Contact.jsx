import React from 'react';
import Newsletter from '../Home/Newsletter';
import Help from './Help';
import Message from './Message';

const Contact = () => {
    return (
       <div className='lato mt-16'>
         <div>
       <Help></Help>
       <Message></Message>
            <Newsletter></Newsletter>
        </div>
       </div>
    );
};

export default Contact;