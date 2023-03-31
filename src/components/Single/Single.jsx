import React from 'react';
import './Single.css'

const Single = ({data}) => {
   
    return (
        <div>
            <div><div className='mt-4 border-bottom'>
               <img className='cover rounded'  src={data.cover} alt="" />
         
               <div className='d-flex justify-content-between py-4'>
                   <div className='d-flex'>
                       <img className='image' src={data.image} alt="" />
                      <div>
                      <h5>{data.name}</h5>
                      <p>14 days</p>
                      </div>
                   </div>
                   <div className='d-flex gap-2'>
                       <p>05 min</p>
                       <p></p>
                   </div>
               </div>
               <h4>{data.title}</h4>
               <div>
               {/* <div className='d-flex'><p>#beginners</p><p>#programming</p></div> */}
               <a className='a' href="">Mark as read</a>
               </div>
           </div></div>
        </div>
    );
};

export default Single;