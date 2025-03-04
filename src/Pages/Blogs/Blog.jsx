import React from 'react';

import BlogContent from './BlogContent';
import UpFooter from '../Home/UpFooter';
import ShareHead from '../../Shared/ShareHead';
import Newsletter from '../Home/Newsletter';

const Blog = () => {
    return (
        <div>
            <ShareHead pageTitle={'Blog & News'}></ShareHead>
            <BlogContent></BlogContent>
            <UpFooter></UpFooter>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Blog;