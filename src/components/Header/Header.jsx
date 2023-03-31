import React from 'react';
import "./Header.css"

const Header = () => {
    return (
    <div>
      <nav className="navbar navbar-light px-4 bg-light justify-content-between">
        <h1 className="navbar-brand Bold text fs-3 ">Knowledge Cafe</h1>
        <img className='image' src="https://virtunus.s3.ap-southeast-1.amazonaws.com/avatars/user_159_fmKmxVocipWjgnUY6QMjqu94Abij27euNrCnmC09.png" alt="" />
       
      </nav>
    </div>
    );
};

export default Header;