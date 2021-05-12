import React from 'react';

export default function Card({ title, children }) {
    return (
        <div className="card">
            <div className="card__title">{title}</div>
            <button className="card__btn">View</button>
        </div>
    );
}