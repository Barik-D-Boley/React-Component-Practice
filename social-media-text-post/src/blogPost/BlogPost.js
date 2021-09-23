import React, { useState } from 'react';
import { BiLike, BiDislike } from "react-icons/bi";

var likeBoolean = false;
var dislikeBoolean = false;

const BlogPost = ({data}) => {
    const { profilePicture, name, text } = data;

    const [likes, setLikes] = useState(Math.round(Math.random() * 300));
    const [dislikes, setDislikes] = useState(Math.round(Math.random() * 80));
    const [likeColor, setLikeColor] = useState("black");
    const [dislikeColor, setDislikeColor] = useState("black");

    function like() {
        if (likeBoolean === false) {
            setLikes(likes + 1);
            setLikeColor("#1F51FF");
            likeBoolean = true;
        } else if (likeBoolean === true) {
            setLikes(likes - 1);
            setLikeColor("black");
            likeBoolean = false;
        }
    }
    function dislike() {
        if (dislikeBoolean === false) {
            setDislikes(dislikes + 1);
            setDislikeColor("#1F51FF");
            dislikeBoolean = true;
        } else if (dislikeBoolean === true) {
            setDislikes(dislikes - 1);
            setDislikeColor("black");
            dislikeBoolean = false;
        }
    }

    return (
        <div className="blogContainer">
            <img className="profile" src={profilePicture} alt={name} />
            <h3 className="name">{name}</h3>
            <p className="content blogText">{text}</p>   
            <button className="btn" id="likeBtn" onClick={() => like()}><BiLike color={likeColor}size="2rem"/></button>
            <p className="blogText">{likes}</p>
            <button className="btn" id="dislikeBtn" onClick={() => dislike()}><BiDislike color={dislikeColor} size="2rem"/></button>
            <p className="blogText">{dislikes}</p>
        </div>
    );
}


export default BlogPost;