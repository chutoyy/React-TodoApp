import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsInterface from "../../interfaces/post.interface";
import Posts from "../../components/Posts";


function UsersPostsPage() {
    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState<PostsInterface[]>([]);

    const loadData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`)
            .then((response) => setPosts(response.data))
        setLoading(false)
    }

    useEffect(() => {
        loadData()
    }, []);
    if (!posts) return null;

    if (loading == true) return <h1>Loading...</h1>
    return (
        <div>
            <h1>Liste des posts</h1>
            {posts.map((post, index)=>{
                return(
                    <Posts
                        key={index}
                        post={post}
                    />
                )
            })}
        </div>
    )
    
        

        


}

export default UsersPostsPage