import React, { useState } from 'react';
import { BiLike, BiDislike } from "react-icons/bi";

const BlogPost = ({data}) => {
    const { profilePicture, name, text } = data;

    const [likes, setLikes] = useState(Math.round(Math.random() * 60));
    const [dislikes, setDislikes] = useState(Math.round(Math.random() * 20));
    return (
        <div>
            <img src={profilePicture} alt={name} />
            <h3>{name}</h3>
            <p>{text}</p>

            <button onClick={() => {setLikes(likes + 1)}}><BiLike /></button>
            <p>{likes}</p>
            <button onClick={() => setDislikes(dislikes + 1)}><BiDislike /></button>
            <p>{dislikes}</p>
        </div>
    );
}


export default BlogPost;