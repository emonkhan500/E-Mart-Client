import React from 'react';
import ShareHead from '../../Shared/ShareHead';
import SharedNewsletter from '../../Shared/SharedNewsletter';
import VendorList from './VendorList';
import UpFooter from '../Home/UpFooter';

const Vendors = () => {
    return (
        <div>
            <ShareHead pageTitle={'Vendors'}></ShareHead>
            <VendorList></VendorList>
            <SharedNewsletter></SharedNewsletter>
            <UpFooter></UpFooter>
        </div>
    );
};

export default Vendors;