import React, { useState} from 'react';
import './addBlog.css'
import {blogApi} from "../api/blogApi";
import {useNavigate} from "react-router-dom";

const AddBlog = () => {
    const [blog, setBlog] = useState({
        title: '',
        text: '',
        date: new Date()
    })
    const navigate = useNavigate()
    const inputHandler = (e) => {
        const {name, value} = e.target
        setBlog(prevState => {
            return {...prevState, [name]: value, [blog.date]: new Date()}
        })
    }
    const submit = async (e) => {
        e.preventDefault();
        e.target.reset();
        await blogApi.addTask(blog)
        navigate({pathname: `/blog`})
    }
    return (
        <div className = 'AddBlog'>
            <h1>Write Blog</h1>

            <form onSubmit={submit} className={'Form'}>
                <input className={'input'} onChange={(e) => inputHandler(e)} type="text" name={'title'} placeholder={'Here is a title'} />
                <textarea className={'textarea'} onChange={(e) => inputHandler(e)} type="text" name={'text'} placeholder={'Here is a text'} />
                <button disabled={blog.title === '' || blog.text === '' ? true : false}  className={'button'}>ADD</button>
            </form>
        </div>
    )
}
export default AddBlog;