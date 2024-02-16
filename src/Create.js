import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
const Create = () => {
    const [title, setTitle] = useState('')
    const [body ,setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const blogs = {title, body, author}
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blogs)
        })
        .then(() => {
            console.log("new blog added")
            setIsPending(false)
            history.push('/')
        })
    }
    return ( 
        
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="Create">
                    <label>Blog title:</label>
                    <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="Create">
                    <label>Blog body:</label>
                    <textarea required
                     value={body}
                     onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <div className="Create">
                    <label>Blog author:</label>
                    <select
                     value={author}
                     onChange = {(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">Mario</option>
                        <option value="luigi">Luigi</option>
                    </select>
                    {!isPending && <button>Add Blog</button>}
                    {isPending && <button disabled>Adding blog...</button>}
                </div>
            </form>
        </div>
     );
}
 
export default Create;