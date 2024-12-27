import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'; // NavBar 가져오기
import About from '../About'; // About 컴포넌트 가져오기
import PostForm from '../../components/Post/PostForm'; // Article 컴포넌트 가져오기

function Main() {
  return (
    <div>
      <Router>
        {/* NavBar는 모든 페이지 상단에 고정 */}
        <NavBar />
        {/* Routes 내부에서 페이지 렌더링 */}
        <Routes>
          <Route path="/" element={<h1>Welcome to the Main Page</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<PostForm />} />
        </Routes>
      </Router>
      <h1> Welcome to the Main Page </h1>
    </div>
  );
}

export default Main;
