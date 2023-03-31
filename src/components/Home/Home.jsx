import React, { useEffect, useState } from 'react';
import Single from '../Single/Single';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blog.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
    },[])

    return (
        <div>
            {blogs.map((data) => (
          <Single data = {data} key = {data.id}></Single>
        ))};
        </div>
    );
};

export default Home;