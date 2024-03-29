import React from 'react';
import { Rate } from 'antd';
import { useState } from 'react';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = () => {
    const [value, setValue] = useState(3);
    return (
        <span>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span className="ant-rate-text"></span> : ''}
        </span>
    );
};

export default Rating;
