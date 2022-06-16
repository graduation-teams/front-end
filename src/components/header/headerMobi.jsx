import React from 'react';
import 'antd/dist/antd.css';
import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';

function HeaderMobi(props) {
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('left');

    const showDrawer = () => {
        setVisible(true);
    };

    const onChange = e => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Space>
                <Radio.Group value={placement} onChange={onChange}>
                    <Radio value="left">left</Radio>
                </Radio.Group>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
            </Space>
            <Drawer
                title="Drawer with extra actions"
                placement={placement}
                width={500}
                onClose={onClose}
                visible={visible}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
}

export default HeaderMobi;
