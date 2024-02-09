import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(
        [
            {title:"Brian yu", body:"The man in the middle of nowhere asking for permission on the different aspects of things and life", author:'Agafina', id: 1},
            {title:"Brian yu", body:"The man in the middle of nowhere asking for permission on the different aspects of things and life", author:'Agafina', id: 2},
            {title:"Brian yu", body:"The man in the middle of nowhere asking for permission on the different aspects of things and life", author:'Agafina', id: 3}
        ]
    );

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blogs => blogs.id !== id)
        setBlogs(newBlogs)
    }
    return ( 
        <div className="Homepage">
            <BlogList blogs ={blogs} title = 'All Blogs!' handleDelete ={handleDelete}/>
        </div>
     );
}
 
export default Home;