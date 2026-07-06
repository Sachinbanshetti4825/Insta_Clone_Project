import { useContext } from "react";
import { getFeed } from "../services/post.api";
import { PostContext } from "../Post.context";
import { Like,unLike } from "../services/post.api";
import {Follow,unFollow} from "../services/post.api";
import { createPost } from "../services/post.api";
import { getSpecificPost } from "../services/post.api";
import { Save,unSave } from "../services/post.api";
import { Comment,UnComment,getComment } from "../services/post.api";

export  function usePost(){

    let context=useContext(PostContext);


    let {loading,setLoading,posts,setPosts,post,setPost,comments,setComments} = context;

    async function handlegetFeed(){

        setLoading(true);

        let postsInfo=await getFeed();

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

    async function handleSave(PostId){


        let save=await Save(PostId);

        await handlegetFeed()
        

    }

    async function handleUnSave(PostId){


        let unsave=await unSave(PostId);

        await handlegetFeed()
        

    }

    async function handleGetComment(PostId){

        let res=await getComment(PostId);

        setComments(res.AllComments);

    }

    async function handleComment(PostId,text){

        let res=await Comment(PostId,text);


        setComments([...comments, res.Comment])

        await handleGetComment(PostId);

    }

    async function handleUnComment(CommentId){

        let res=await UnComment(CommentId);

        setComments(prev=>
            prev.filter(comment=>comment._id!==CommentId)
        );

    }

    



    return {
        posts,loading,post,comments,
        handlegetFeed,
        handleLike,handleunLike,
        handleFollow,handleunFollow,
        handleCreatePost,handleSpecificPost,
        handleSave,handleUnSave,
        handleComment,handleUnComment,handleGetComment
    }

}