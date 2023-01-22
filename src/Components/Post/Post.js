import React, { useState } from 'react'
import "../Post/Post.css"
import { FiMoreVertical } from "react-icons/fi"
import { Users } from "../../dummydata"

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLike, setisLike] = useState(false)

  const likeHandler =() =>{
    setLike(isLike ? like - 1 : like + 1)
    setisLike(!isLike)
  }
  return (
    <div className='post'>
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTop-Left">
              <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="Profile" />
              <span className="postUsername">
                {Users.filter((u) => u.id === post.userId)[0].username}
              </span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTop-Right">
              <FiMoreVertical />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className='postImage' src={post.photo} alt="post" />
          </div>
          <div className="postBottom">
            <div className="postBottom-left">
              <img className="likeicon" src="assert/heart.png" onClick={likeHandler} alt="heart" />
              <img className="likeicon" src="assert/like.png" onClick={likeHandler} alt="heart" />
              <span className="postLikeCounter">{like}</span>
            </div>
            <div className="postBottom-Right">
              <span className="postComment">{post.comment} Comments</span>
            </div>
          </div>
        </div>
    </div>
  )

}

