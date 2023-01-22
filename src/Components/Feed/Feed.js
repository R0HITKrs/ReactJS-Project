import React from 'react'
import './Feed.css'
import Share from '../../Components/Share_Post/Share'
import Post from '../Post/Post'
import { Posts } from '../../dummydata';

export default function Feed() {
  return (
    <div className='feedbar'>
        <div className="feedwrapper">
          <Share />
          {Posts.map((p)=>(
            <Post key={p.id} post={p} />
          ))}
        </div>
    </div>
  )
}
