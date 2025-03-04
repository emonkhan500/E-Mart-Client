import React from 'react';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import UpFooter from '../Home/UpFooter';
import ShareHead from '../../Shared/ShareHead';

const Blog = () => {
    return (
        <div>
            <ShareHead pageTitle={'Blog & News'}></ShareHead>
            <BlogContent></BlogContent>
            <UpFooter></UpFooter>
        </div>
    );
};

export default Blog;