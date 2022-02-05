import Header from './parts/Header';
import Home from './pages/Home';
import Article from './pages/Article';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles/:id" element={<Article />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
