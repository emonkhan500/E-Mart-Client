import React from 'react';
import ShareHead from '../../Shared/ShareHead';
import VendorList from './VendorList';

const Vendors = () => {
    return (
        <div>
            <ShareHead pageTitle={'Vendors'}></ShareHead>
            <VendorList></VendorList>
        </div>
    );
};

export default Vendors;