// 게시글 작성 및 수정 폼

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PostForm({ addPost, updatePost, posts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && posts) {
      const post = posts.find((post) => post.id === parseInt(id));
      if (post) {
        setTitle(post.title);
        setContent(post.content);
      }
    }
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updatePost({ id: parseInt(id), title, content });
    } else {
      addPost({ title, content });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>제목</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>내용</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type="submit">저장</button>
    </form>
  );
}

export default PostForm;
