import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { Parser } from 'html-to-react'
import Prism from 'prismjs';

import './ArticlePage.css';
import 'prismjs/themes/prism-tomorrow.css'; // Сначала тема Prism
import '../styles/prism-overrides.css'; // Потом кастомные стили


export default function ArticlePage() {
    const { id } = useParams();
    const article = articles.find(a => a.id === parseInt(id));

    // Активация подсветки после рендера
    useEffect(() => {
        Prism.highlightAll();
    }, [id]); // Переподсветка при смене статьи
    
    if (!article) return <div>Статья не найдена</div>;

    return (
        <div className="article-container">
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
                <span>🗓 {article.date}</span>
                <span>🏷️ {article.tags}</span>
            </div>
            {Parser().parse(article.content)}
            <a href="/" className="back-link">← На главную</a>
        </div>
    );
}
