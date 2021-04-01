import React from 'react';
import ReacDOM from 'react-dom';
import '../../scss/entry/index.scss';

const App = () => (
    <div className="page">
        <div className="page__body">
            <div className="page__title">Typical React App</div>
        </div>
    </div>
);

ReacDOM.render(<App />, document.getElementById('app'));
