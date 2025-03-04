import React from 'react';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import UpFooter from '../Home/UpFooter';

const Blog = () => {
    return (
        <div>
            <BlogHeader></BlogHeader>
            <BlogContent></BlogContent>
            <UpFooter></UpFooter>
        </div>
    );
};

export default Blog;