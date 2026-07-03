import { useContext } from "react";
import { getFeed } from "../services/post.api";
import { PostContext } from "../Post.context";
import { Like,unLike } from "../services/post.api";
import {Follow,unFollow} from "../services/post.api";
import { createPost } from "../services/post.api";
import { getSpecificPost } from "../services/post.api";

export  function usePost(){

    let context=useContext(PostContext);


    let {loading,setLoading,posts,setPosts,post,setPost} = context;

    async function handlegetFeed(){

        setLoading(true);

        let postsInfo=await getFeed();

        console.log(postsInfo)

        setPosts(postsInfo.posts);

        setLoading(false);

    }

    async function handleLike(PostId){

        let like=await Like(PostId);

        await handlegetFeed()

    }

    async function handleunLike(PostId){

        let like=await unLike(PostId);

        await handlegetFeed()

    }

    async function handleFollow(FolloweeId){

        console.log(FolloweeId);

        let follow=await Follow(FolloweeId);

        await handlegetFeed()

    }

    async function handleunFollow(FolloweeId){

        let follow=await unFollow(FolloweeId);

        await handlegetFeed()

    }

    async function handleCreatePost(Caption,image) {

        setLoading(true);
        
        let Singlepost = await createPost(Caption,image);

        setPost(Singlepost.post);

        setPosts([
            ...posts,
            post
        ])

        await handlegetFeed();

        setLoading(false);


    }

    async function handleSpecificPost(PostId){

        setLoading(true);

        console.log(PostId)

        let postDetails=await getSpecificPost(PostId);

        setPost(postDetails.post);

        setLoading(false);
    }

    return {
        posts,loading,post,handlegetFeed,handleLike,handleunLike,handleFollow,handleunFollow,handleCreatePost,handleSpecificPost
    }

}