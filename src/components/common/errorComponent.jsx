import React from 'react';
function ErrorComponent({ error }) {
    return (
        <div>
            <h1>Something went wrong with this component</h1>
            <p>{error.message}</p>
        </div>
    );
};

export default ErrorComponent;