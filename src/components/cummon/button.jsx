import React from 'react';
import PropTypes from 'prop-types';

Btn.propTypes = {
    onClick: PropTypes.func,
};

function Btn(props) {
    return (
        <button className={`btn ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </button>
    );
}

export function BtnHover(props) {
    return (
        <Btn className={`btn-hover ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </Btn>
    );
}

export default Btn;
