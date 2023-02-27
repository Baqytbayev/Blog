import React, {useEffect, useState} from "react";
import './FullInfo.css'
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {blogApi} from "../api/blogApi";


const FullOnfo = () => {
    const params = useParams()
    const [fullBlog, setFullBlog] = useState({})
    const getById = async () => {
        const data = await blogApi.getBlogById(params.id)
        setFullBlog(data)
    }
    useEffect(() => {
        getById()
    }, [])
    const navigate = useNavigate()
    const remove = async (key) => {
        await blogApi.remove(params.id)
        navigate({pathname: `/blog`})
    }
    return (
        <div className={'FullInfo'}>
            <h1 className={'Title'}>{fullBlog.title}</h1>
            <p className={'text'}><strong>Date: </strong>{fullBlog.date}</p>
            <p className={'text'}><strong>Blog: </strong>{fullBlog.text}</p>
            <div className={'Button--Div'}>
                <button className = {'ButtonDelete'} onClick={remove}>Delete</button>
                <button className = {'ButtonDelete'}><NavLink to={`/blog/${params.id}/change`}>Edit</NavLink></button>
            </div>

        </div>
    )
}
export default FullOnfo;