import React from "react";
import './Blog.css'
import {NavLink} from "react-router-dom";


const Blog = (props) => {
    return (
        <div className = 'Blog--Item'>
            <h2 className={'title'}>
                {props.title}
            </h2>
            <button className={'button--blog'}><NavLink to={`/blog/${props.id}`}>Read More</NavLink></button>
        </div>
    )
}
export default Blog;