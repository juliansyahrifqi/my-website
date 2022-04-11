import Header from './parts/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Project from './pages/Project';
import DetailBlog from './pages/DetailBlog';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App flex flex-col h-screen justify-between">
        <Header />

        <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-4xl xl:px-0 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<DetailBlog />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
