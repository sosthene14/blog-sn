const Post = ({ post }) => {
    return (
        <div>
            <img src={post.coverImage} alt={post.title}/>
            <h2>{post.title}</h2>
            <p>{post.brief}</p>
            <p>{post.totalReactions}</p>
            <p>{post.dateAdded}</p>
            <p>{post.replyCount}</p>
        </div>
    )
}
export default Post;
