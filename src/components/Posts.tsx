import PostsInterface from "../interfaces/post.interface";

function Posts({post}: {post: PostsInterface}){
    return(
        <div className="freelance-box">

            <div>
                <h2><b>#{post.id}</b> 
                <span className="post"> {post.title} </span> </h2>
                <p> {post.body}</p>
            </div>
        </div>
    )
}
export default Posts