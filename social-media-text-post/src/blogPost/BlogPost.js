import React, { useState } from 'react';
import { BiLike, BiDislike } from "react-icons/bi";

var likeBoolean = false;
var dislikeBoolean = false;

const BlogPost = ({data}) => {
    const { profilePicture, name, text } = data;

    const [likes, setLikes] = useState(Math.round(Math.random() * 300));
    const [dislikes, setDislikes] = useState(Math.round(Math.random() * 80));

    function like() {
        if (likeBoolean === false) {
            setLikes(likes + 1);
            likeBoolean = true;
        } else if (likeBoolean === true) {
            setLikes(likes - 1);
            likeBoolean = false;
        }
    }
    function dislike() {
        if (dislikeBoolean === false) {
            setDislikes(dislikes + 1);
            dislikeBoolean = true;
        } else if (dislikeBoolean === true) {
            setDislikes(dislikes - 1);
            dislikeBoolean = false;
        }
    }

    return (
        <div className="blogContainer">
            <img className="profile" src={profilePicture} alt={name} />
            <h3 className="name">{name}</h3>
            <p className="content">{text}</p>   
            <button className="btn" id="likeBtn" onClick={() => like()}><BiLike size="2rem"/></button>
            <p>{likes}</p>
            <button className="btn" id="dislikeBtn" onClick={() => dislike()}><BiDislike size="2rem"/></button>
            <p>{dislikes}</p>
        </div>
    );
}


export default BlogPost;