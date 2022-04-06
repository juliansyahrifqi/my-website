import Header from './parts/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
