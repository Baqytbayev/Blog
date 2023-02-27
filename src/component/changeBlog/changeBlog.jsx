import React, {useEffect, useState} from "react";
import './changeBlog.css'
import {useNavigate, useParams} from "react-router-dom";
import {blogApi} from "../api/blogApi";


const ChangeBlog = () => {
    const params = useParams()
    const [changeBlog, setChangeBlog] = useState({})
    const getBlogById = async () => {
        const data = await blogApi.getBlogById(params.id)
        setChangeBlog(data)
    }
    useEffect(() => {
        getBlogById()
    }, []);
    const inputHandler = (e) => {
        const {name, value} = e.target
        setChangeBlog(prevState => {
            return {...prevState, [name]: value,}
        })
    }
    const navigate = useNavigate()
    const submit = async (e) => {
        e.preventDefault();
        e.target.reset();
        await blogApi.changeBlog(params.id, changeBlog)
        navigate({pathname: `/blog`})
    }
    return (
        <div>
            <h1>Change Blog</h1>

            <form onSubmit={submit} className={'Form'}>
                <input className={'input'} value={changeBlog.title} onChange={(e) => inputHandler(e)} type="text" name={'title'} placeholder={'Here is a title'} />
                <textarea value={changeBlog.text} className={'textarea'} onChange={(e) => inputHandler(e)} type="text" name={'text'} placeholder={'Here is a text'} />
                <button disabled={changeBlog.title === '' || changeBlog.text === '' ? true : false}  className={'button'}>ADD</button>
            </form>
        </div>
    )
}
export default ChangeBlog;