import React, { useEffect } from 'react'
import { getDocs , collection} from 'firebase/firestore'
import { auth, db } from '../../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react'
import Post from './Post'

const Main = () => {
  const [postslist , setpostsList]= useState(null);
  const [user] = useAuthState(auth);
  const postsRef = collection(db , 'posts');


const getPosts = async() => {

  const data = await getDocs(postsRef);
  setpostsList(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}

useEffect(()=>{
getPosts();
},
[]);

  return (
    <div>
      

      
      {user && postslist?.map((post)=>(
        <Post key={post.id} post={post}/>
      ))}
    
    </div>
  )
}

export default Main
