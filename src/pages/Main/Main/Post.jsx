import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, db } from '../../../config/firebase';
import { addDoc , collection,getDocs,query, where , deleteDoc  ,doc } from 'firebase/firestore';



const Post = (props) => {
  const {post} = props ;
  const [user] = useAuthState(auth);
  const [likes , setLikes]= useState([]);


  const likesRef = collection(db ,"likes")
  
  const addLike = async(data)=> {
    try{
    const newDoc = await addDoc(likesRef,{postId:post.id,userId:user?.uid,})
    if(user){
      setLikes((prev) => prev ? [...prev, { userId: user.uid, likeId: newDoc.id }] : [{ userId: user.uid, likeId: newDoc.id }]);
    }
  }catch(err){
      console.log(err)
    }

  }

  const removeLike = async(data)=> {
    try{
      const liketodelete = query(likesRef,where("postId" ,"==" ,post.id),where("userId" ,"==" , user?.uid));

      const likeToDeleteData = await getDocs(liketodelete);
      const likeToDeleteId = likeToDeleteData.docs[0].id ;

      const likeToDelete = doc(db , "likes" , likeToDeleteId)
    await deleteDoc(likeToDelete)
  if(user){
    setLikes((prev) => prev.filter((like) => like.likeId !== likeToDeleteId));
    }
  }catch(err){
      console.log(err)
    }

  }

  const hasUserLiked = likes?.find((like)=> like.userId === user?.uid)

  const likeDoc = query(likesRef,where("postId" ,"==" ,post.id))

  const getLikes = async() => {
    const data =await getDocs(likeDoc)
    setLikes(data.docs.map((doc)=>({userId : doc.data.userId , likeid : doc.id})))
  }

  useEffect(()=>{
    getLikes();
  },[])

  return (
    <div className='frame'>
      <div className='title'>
        <h1>{post.title}</h1>
      </div>
      <div className='body'>
      <h1>{post.description}</h1>

      </div>
      <div className='footer'>
      <h1>@{post.username}</h1>
      <button onClick={hasUserLiked ? removeLike : addLike}> {hasUserLiked ? <>&#128078;</> : <>&#128077;</> }</button>
      <p>likes :{likes?.length}</p>
      </div>
    </div>
  )
}

export default Post

