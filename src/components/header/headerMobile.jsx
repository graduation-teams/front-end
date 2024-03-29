import React from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';
import { menuSecond } from './header';
import Icon from '@ant-design/icons';
import { ReactComponent as logo } from '@assets/icons/ts.svg';
import { ReactComponent as IconHeaderMobile } from '@assets/icons/ts.svg';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';

import { Input } from 'antd';
const { Search } = Input;

const onSearch = value => console.log(value);

function HeaderMobile(props) {
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
        <div className="mobi">
            <div className="mobi-header">
                <Space>
                    <div className="mobi-header_left">
                        <Radio.Group value={placement} onChange={onChange}>
                            <Radio value="left">left</Radio>
                        </Radio.Group>
                    </div>
                    <Button onClick={showDrawer}>
                        <Icon component={IconHeaderMobile} />
                    </Button>
                </Space>
                <Drawer placement={placement} width={300} onClose={onClose} open={visible}>
                    <div className="mobi-header__body">
                        <a href="#" className="logo">
                            <Icon component={logo} />
                            <span>TechStore</span>
                        </a>
                        {/* <div className="search-mobi">
                            <Space direction="vertical">
                                <Search
                                    placeholder="Type here ..."
                                    allowClear
                                    onSearch={onSearch}
                                    size="large"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Space>
                        </div> */}
                        <div className="list__menu-mobi">
                            <ul>
                                {menuSecond.map((e, i) => (
                                    <li key={i} className="item">
                                        <a href={e.link}>{e.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Drawer>
            </div>

            {/* <div className="mobi--logo">
                <a href="#" className="logo">
                    <Icon component={logo} />
                    <span>TechStore</span>
                </a>
            </div> */}
        </div>
    );
}

export default withErrorBoundary(HeaderMobile, {
    FallbackComponent: ErrorComponent,
});
