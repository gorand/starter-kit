import React from 'react';
import Card from './Card.jsx';

const mocks = ['React Components', 'JS Modules', 'Validation', 'SCSS Architecture', 'Semantic HTML', 'Accessibility'];

export default function Main() {
    return (
        <div className="cards">
            {mocks.map((content, i) => (
                <Card key={i} title={content}>{content}</Card>
            ))}
        </div>
    );
}
