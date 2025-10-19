import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <h1>This is Details page</h1>
        </div>
    );
};

export default Details;