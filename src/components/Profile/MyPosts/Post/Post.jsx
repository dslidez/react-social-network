import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg' />
        {props.message}
          <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )

}

export default Post;