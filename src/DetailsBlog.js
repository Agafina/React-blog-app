import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const DetailsBlog = () => {
    const { id } = useParams();
    const { data: blogs, error, isPending} = useFetch(`http://localhost:8000/blogs/` + id) 
    const history = useHistory()

    const handleDelete = () =>{
        fetch(`http://localhost:8000/blogs/` + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading ...</div>}
            {error && <div> { error } </div>}
            {blogs && (
                <article>
                    <h2>{ blogs.title}</h2>
                    <p>{ blogs.author}</p>
                    <div className="blog-body"> { blogs.body }</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
                
            )}
        </div>
     );
}
 
export default DetailsBlog;