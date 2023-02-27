import React, {useEffect, useState} from 'react';
import './getBlogFromApi.css'
import {blogApi} from "../api/blogApi";
import Blog from "./Blog/Blog";

const GetBlogFromApi = () => {
    const [blog, setBlog] = useState({})
    const getBlog = async () => {
        const data = await blogApi.getBlog()
        setBlog(data)
    }
    useEffect(() => {
        getBlog()
    }, [blog])
    return (
        <div className = 'Blog'>
            {Object.keys(blog).map(key => {
                return <Blog
                    key = {key}
                title={blog[key].title}
                id={key}
                />
            })}
        </div>
    )
}
export default GetBlogFromApi;