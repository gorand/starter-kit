import React from 'react';
import ReacDOM from 'react-dom';
import '../../scss/entry/index.scss';

const App = () => (
    <div className="box">
        <div className="container">Typical React App</div>
    </div>
);

ReacDOM.render(<App />, document.getElementById('app'));
