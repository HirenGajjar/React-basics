import { createContext } from "react";



const PostList = createContext({});




const PostListProvider =({children})=>{
    return <PostList.Provider>

{
    children
}

    </PostList.Provider>
}
export default PostListProvider