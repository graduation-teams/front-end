import React from 'react';
import { Col, Row, Tabs } from 'antd';

const items = [
    {
        label: 'Description',
        key: 'item-1',
        children: (<React.Fragment>
            {' '}
            <div className="content-1">
                <div className="content-header">
                    <p>
                        Etiam nulla nunc, aliquet vel metus nec, scelerisque tempus enim. Sed eget blandit lectus. Donec facilisis ornare turpis id pretium. Maecenas scelerisque interdum dolor in vestibulum. Proin euismod dui purus,
                        non lacinia ligula luctus. Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="content-body">
                    <Row>
                        <Col sm={24} md={8} xl={8}>
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/elementor/thumbs/1.0-20-orsuwtfiwtj7mt2tesxfz7crku8rntkrdv4kxnb5xu.jpg" alt="" />
                        </Col>
                        <Col sm={24} md={16} xl={16}>
                            <div className="content-right">
                                <h3>Etiam nulla nunc, aliquet vel metus nec, scelerisque tempus enim sed eget blandit lectus.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officiad est laborum.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="content-1">
                <div className="content-body">
                    <Row>
                        <Col sm={24} md={8} xl={8}>
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/elementor/thumbs/6-orsuwj3atn5233hu36gjpryp1lnqb5fpofy8nlqhua.jpg" alt="" />
                        </Col>
                        <Col sm={24} md={16} xl={16}>
                            <div className="content-right">
                                <h3>Etiam nulla nunc, aliquet vel metus nec, scelerisque tempus enim sed eget blandit lectus.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officiad est laborum.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>),
    },
    {
        label: 'Additional information',
        key: 'item-2',
        children: (<div className="content-1">Content of tab 2 </div>),
    },
    {
        label: 'Reviews',
        key: 'item-3',
        children: (<div className="content-1">Content of tab 3 </div>),
    },
];
function productDescription(props) {
    return (
        <div className="product-description">
            <section className="product-desc">
                <div className="container-1200">
                    <Tabs items={items} />
                </div>
            </section>
        </div>
    );
}

export default productDescription;
