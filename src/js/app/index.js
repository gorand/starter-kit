import React, { useEffect, useState } from 'react';
import ReacDOM from 'react-dom';
import '../../scss/entry/index.scss';

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
        <div className={'overspin' + (overed ? ' is-visible' : '')}>
            <div className="page">
                <div className="page__body">
                    <div className="page__title">Typical React App</div>
                    {loading && spinner}
                </div>
            </div>
        </div>
    );
};

ReacDOM.render(<App />, document.getElementById('app'));
