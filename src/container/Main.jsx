import React from 'react';
import './Main.css'
import AddBlog from "../component/addBlog/addBlog";
import GetBlogFromApi from "../component/getBlogFromApi/getBlogFromApi";
import {Route, Routes} from "react-router-dom";
import Layout from "../component/Layout/Layout";
import FullOnfo from "../component/FullInfo/FullInfo";
import ChangeBlog from "../component/changeBlog/changeBlog";
import Other from "../component/other/Other";

const Main = () => {
    return (
        <div className = "conatiner">
            <Routes>
                <Route element={<Layout/>}>
                    <Route path={'/blog'} element={<GetBlogFromApi/>}></Route>
                    <Route path={'/blog/edit'} element={<AddBlog/>}></Route>
                    <Route path={'/blog/:id'} element={<FullOnfo/>}></Route>
                    <Route path = {'/blog/:id/change'} element={<ChangeBlog/>}></Route>
                    <Route path={'/blog/contacts'} element={<Other
                        title={'Here are Contacts'}
                        text={'Here Text'}
                    />}></Route>
                    <Route path={'/blog/about'} element={<Other
                        title={'Here are About'}
                        text={'Here Text'}
                    />}></Route>
                </Route>
            </Routes>
        </div>
    )
}
export default Main