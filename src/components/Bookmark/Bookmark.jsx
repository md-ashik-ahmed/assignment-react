import React from 'react';

const Bookmark = () => {
    return (
      
        <div className='mt-4'>
            <div className='border px-4 py-3 rounded'>
            <h5>Spent time on read : <span>117</span> min</h5>
        </div>

        <div className='bookmarked mt-4 rounded'>
            <h4 className='py-4'>Bookmarked Blogs : <span>8</span></h4>
            <h6 className='h6 border mx-4 py-3 mb-4 rounded'>What is Front-End Development?</h6>
        </div>
        </div>
    );
};

export default Bookmark;