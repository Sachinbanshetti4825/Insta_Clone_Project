import { createContext, useState } from "react";

export const PostContext=createContext();

export const PostProvider = ({children})=>{

    let [loading,setLoading]=useState(false);
    let [posts,setPosts]=useState([]);
    let [post,setPost]=useState(null);

    return(
        <PostContext.Provider value={{loading,setLoading,posts,setPosts,post,setPost}}>
            {children}
        </PostContext.Provider>
    )

}