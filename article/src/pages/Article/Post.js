import React, { useState } from 'react';
import PostDetail from './PostDetail';
import './Post.css'

const Post = ({ post, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  // 홀수와 짝수를 구분하여 왼쪽(회색)과 오른쪽(초록) 말풍선 스타일을 적용
  const isLeft = index % 2 === 0;

  return (
    <div className={`post ${isLeft ? 'left' : 'right'}`}>
      <div className={`bubble-container ${isLeft ? 'left' : 'right'}`}>
        <div className="profile-img">
          <img 
            src={isLeft ? '/images/profile_left.jpg' : '/images/profile_right.jpg'} 
            alt="프로필" 
          />
        </div>
        <div className={`bubble ${isLeft ? 'left_bubble' : 'right_bubble'}`}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <button onClick={toggleDetails}>
            {showDetails ? '상세 정보 숨기기' : '상세 정보 보기'}
          </button>

          {showDetails && <PostDetail post={post} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
