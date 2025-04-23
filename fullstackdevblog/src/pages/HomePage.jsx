import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import './HomePage.css';

export default function HomePage() {
    useEffect(() => {
        // Логика фильтрации
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                // Убираем активность у всех кнопок
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                // Делаем активной текущую кнопку
                button.classList.add('active');
                // Получаем выбранную категорию
                const filter = button.dataset.filter;
                // Фильтруем карточки
                document.querySelectorAll('.filtered-card').forEach(card => {
                const category = card.getAttribute("category");
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
                });
            });
        });
    }, []); // Пустой массив = componentDidMount

    return (
        <div className="posts-grid">
            {articles.map(article => (
            <article key={article.id} className="post-card">
                <Link to={`/article/${article.id}`}>
                    <h3>{article.title}</h3>
                    <p className="post-date">🗓 {article.date}</p>
                    <p className="post-tags">🏷️ {article.tags}</p>
                    <p className="post-tags">{article.short_content}</p>
                </Link>
            </article>
            ))}
        </div>
    );
}
