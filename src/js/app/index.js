import React from 'react';
import ReacDOM from 'react-dom';
import '../../scss/init/index.scss';

const App = () => (
    <div className="box">
        <div className="container">Typical React App</div>
    </div>
);

ReacDOM.render(<App />, document.getElementById('app'));
