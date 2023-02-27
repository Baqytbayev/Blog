import {blogInstance} from "./instances";


class BlogApi {
    getBlog = async () => {
        const responce = await blogInstance.get('blog.json');
        return responce.data
    }
    addTask = async (newBlog) => {
        try{
            await blogInstance.post('blog.json', newBlog)
        }catch (e) {
            console.log(e)
        }
    }
    getBlogById = async (id) => {
        try {
            const responce = await blogInstance.get(`/blog/${id}.json`)
            return responce.data
        }catch (err) {
            console.log(err)
        }
    }
    remove = async (key) => {
        await blogInstance.delete(`blog/${key}.json`)
    }
    changeBlog = async(key, data) => {
        await blogInstance.put(`/blog/${key}.json`,data)
    }
};

export const blogApi = new BlogApi();