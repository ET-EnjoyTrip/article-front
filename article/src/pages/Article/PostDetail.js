import React from 'react';

const PostDetail = ({ post }) => {
  return (
    <div className="post-detail">
      <h5>상세 정보</h5>
      <p>{post.details}</p>
      {post.image && <img src={post.image} alt="게시글 이미지" />}
    </div>
  );
};

export default PostDetail;
