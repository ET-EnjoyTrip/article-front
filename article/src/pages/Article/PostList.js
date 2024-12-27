import React, { useState } from "react";
import PostForm from "../../components/Post/PostForm";
import PostList from "../../components/Post/PostList";
import './PostList.css'

function Article() {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([
    { id: 1, title: "첫 번째 게시글", content: "내용을 입력해주세요." },
    { id: 2, title: "두 번째 게시글", content: "이곳에 내용을 입력하세요." },
  ]);

  // 게시글 추가
  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
    setShowForm(false); // 게시글 추가 후 폼 닫기
  };

  return (
    <div>
      <h1>게시판</h1>

      {/* 게시글 목록 */}
      <PostList posts={posts} deletePost={(id) => setPosts(posts.filter((post) => post.id !== id))} />

      {/* 버튼으로 PostForm 표시 */}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "작성 취소" : "새 글 작성"}
      </button>

      {/* PostForm 표시 */}
      {showForm && <PostForm addPost={addPost} />}
    </div>
  );
}

export default Article;
