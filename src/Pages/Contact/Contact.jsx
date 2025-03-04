import React from 'react';
import Newsletter from '../Home/Newsletter';
import Help from './Help';
import Message from './Message';
import Team from '../About/Team';
import ShareHead from '../../Shared/ShareHead';

const Contact = () => {
    return (
       <div className='lato mt-6'>
         <div>
          <ShareHead  pageTitle={'Contact'}></ShareHead>
       <Help></Help>
       <Message></Message>
       <Team></Team>
            <Newsletter></Newsletter>
        </div>
       </div>
    );
};

export default Contact;