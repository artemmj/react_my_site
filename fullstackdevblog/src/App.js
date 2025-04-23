import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import './App.css';

import "prismjs/themes/prism-okaidia.min.css"; // Import theme

require("prismjs/components/prism-bash");
require("prismjs/components/prism-python");

function App() {
  useEffect(() => {
    window.addEventListener('load', () => {
        document.body.style.opacity = 1;
    });

    const scrollBtn = document.querySelector('.scroll-top');

    // Показать/скрыть кнопку
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > 400) { scrollBtn.classList.add('visible'); }
        else { scrollBtn.classList.remove('visible'); }
    });

    // Плавный скролл
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
  }, []); // Пустой массив = componentDidMount

  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </main>
      <button className="scroll-top" aria-label="Наверх" title="Наверх">
        ↑
      </button>
      <Footer />
    </Router>
  );
}

export default App;
