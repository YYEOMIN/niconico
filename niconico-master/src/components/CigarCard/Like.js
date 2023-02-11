import React from "react";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import "./like.css";
import axios from "axios";

export default function Like() {
  const [Likes, setLikes] = useState(0);
  const [Dislikes, setDislikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [DislikeAction, setDislikeAction] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3001/cigarposts").then((response) => {
      if (response.data.success) {
        //How many likes does this video or comment have
        setLikes(response.data.like.length);

        //if I already click this like button or not
      }
    });

    axios.get("http://localhost:3001/cigarposts").then((response) => {
      if (response.data.success) {
        //How many likes does this video or comment have
        setDislikes(response.data.dislike.length);

        //if I already click this like button or not
      }
    });
  }, []);

  const onLike = () => {
    if (LikeAction === null) {
      axios.get("http://localhost:3001/cigarposts").then((response) => {
        if (response.data.success) {
          setLikes(Likes + 1);
          setLikeAction("liked");

          //If dislike button is already clicked

          if (DislikeAction !== null) {
            setDislikeAction(null);
            setDislikes(Dislikes - 1);
          }
        }
      });
    } else {
      axios.get("http://localhost:3001/cigarposts").then((response) => {
        if (response.data.success) {
          setLikes(Likes - 1);
          setLikeAction(null);
        }
      });
    }
  };

  const onDisLike = () => {
    if (DislikeAction !== null) {
      axios.get("http://localhost:3001/cigarposts").then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes - 1);
          setDislikeAction(null);
        }
      });
    } else {
      axios.get("http://localhost:3001/cigarposts").then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes + 1);
          setDislikeAction("disliked");

          //If dislike button is already clicked
          if (LikeAction !== null) {
            setLikeAction(null);
            setLikes(Likes - 1);
          }
        }
      });
    }
  };
  return (
    <div className="like-dislike-btn">
      <span key="comment-basic-like">
        <div title="Like">
          <LikeOutlined
            type="like"
            theme={LikeAction === "liked" ? "filled" : "outlined"}
            onClick={onLike}
          />
        </div>
        <span style={{ paddingLeft: "8px", cursor: "auto" }}>{Likes}</span>
      </span>
      &nbsp;&nbsp;
      <span key="comment-basic-dislike">
        <div title="Dislike">
          <DislikeOutlined
            type="dislike"
            theme={DislikeAction === "disliked" ? "filled" : "outlined"}
            onClick={onDisLike}
          />
        </div>
        <span style={{ paddingLeft: "8px", cursor: "auto" }}>{Dislikes}</span>
      </span>
    </div>
  );
}
