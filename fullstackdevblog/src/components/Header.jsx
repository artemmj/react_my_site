import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            {/* Логотип с ссылкой на главную */}
            <div className="logo">
                <a href="/">FullStackDevBlog.ru</a>
            </div>
            {/* Навигация */}
            {/* <nav className="nav">
            </nav> */}
            <div className="nav">
                <button className="filter-btn active" data-filter="all">Всё</button>
                <button className="filter-btn" data-filter="python">Python</button>
                <button className="filter-btn" data-filter="django">Django</button>
                <button className="filter-btn" data-filter="go">Go</button>
                <button className="filter-btn" data-filter="js">JS</button>
                <button className="filter-btn" data-filter="devops">DevOps</button>
            </div>
        </header>
    );
}

