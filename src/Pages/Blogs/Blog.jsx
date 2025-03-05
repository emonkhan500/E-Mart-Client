import React from 'react';

import BlogContent from './BlogContent';
import UpFooter from '../Home/UpFooter';
import ShareHead from '../../Shared/ShareHead';
import SharedNewsletter from '../../Shared/SharedNewsletter';

const Blog = () => {
    return (
        <div>
            <ShareHead pageTitle={'Blog & News'}></ShareHead>
            <BlogContent></BlogContent>
            <UpFooter></UpFooter>
            <SharedNewsletter></SharedNewsletter>
        </div>
    );
};

export default Blog;