import React, { useEffect, useState } from 'react';
import ReacDOM from 'react-dom';
import '../../scss/entry/index.scss';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    const spinner = <div className="spinner spinner--primary"></div>;

    return (
        <div className="page">
            <div className="page__body">
                <div className="page__title">Typical React App</div>
                {loading && spinner}
            </div>
        </div>
    );
};

ReacDOM.render(<App />, document.getElementById('app'));
