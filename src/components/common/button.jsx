import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

Btn.propTypes = {
    onClick: PropTypes.func,
};

function Btn(props) {
    return (
        <Button type='primary' size='large' className={`btn ${props.className}`} onClick={props.onClick ? () => props.onClick() : null} {...props}>
            {props.children}
        </Button>
    );
}

export function BtnHover(props) {
    return (
        <Btn className={`btn-hover ${props.className}`} onClick={props.onClick ? () => props.onClick() : null} {...props}>
            {props.children}
        </Btn>
    );
}

export default Btn;
