import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Overspin from '../components/Overspin.jsx';
import Main from '../components/Main.jsx';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [overed, setOver] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setOver(true);
        }, 2000);
        setTimeout(() => setOver(false), 5000);
    }, []);

    const spinner = <div className="spinner spinner--primary"></div>;

    return (
        <Overspin visible={overed}>
            <div className="page">
                <div className="page__body">
                    <div className="page__title">Typical Parts (example of responsive flexbox)</div>
                    {loading && spinner}
                    {!loading && <Main />}
                </div>
            </div>
        </Overspin>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
