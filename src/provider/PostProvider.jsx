import { PostContext } from "../context";
import { useQueryPosts } from "../hooks";

const PostProvider = ({ children }) => {
    const { postData, error } = useQueryPosts();

    <PostContext.Provider value={{ postData, error }}>
        {children}
    </PostContext.Provider>
}

export default PostProvider;