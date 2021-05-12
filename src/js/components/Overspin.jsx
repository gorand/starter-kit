import React from 'react';

export default function Overspin({ visible, children }) {
    return (
        <div className={'overspin' + (visible ? ' is-visible' : '')}>
            {children}
        </div>
    );
}