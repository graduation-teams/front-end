import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Icon from '@ant-design/icons';

import { ReactComponent as IconLogo1 } from '@assets/images/footer-1.svg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}

export default class ProductsThree extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            loop: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <section className="products-three mb-5">
                <div className="container-1200">
                    <div className="products-box">
                        <Slider {...settings}>
                            <a href="#" className="product-item">
                                <div className="product-item--img">
                                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
                                </div>
                                <div className="product-item--icon">
                                    <div className="product-item--icon_card">
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                    </div>
                                </div>
                                <div className="desc">
                                    <p className="title">Native Union SMART 4 Charger 1</p>
                                    <p className="branch">LG</p>
                                    <p className="price">
                                        <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                    </p>
                                </div>
                            </a>

                            <a href="#" className="product-item">
                                <div className="product-item--img">
                                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/1.1-1.jpg" alt="" />
                                </div>
                                <div className="product-item--icon">
                                    <div className="product-item--icon_card">
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                    </div>
                                </div>
                                <div className="desc">
                                    <p className="title">Native Union SMART 4 Charger 1</p>
                                    <p className="branch">LG</p>
                                    <p className="price">
                                        <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                    </p>
                                </div>
                            </a>

                            <a href="#" className="product-item">
                                <div className="product-item--img">
                                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.2-2.jpg" alt="" />
                                </div>
                                <div className="product-item--icon">
                                    <div className="product-item--icon_card">
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                    </div>
                                </div>
                                <div className="desc">
                                    <p className="title">Native Union SMART 4 Charger 1</p>
                                    <p className="branch">LG</p>
                                    <p className="price">
                                        <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                    </p>
                                </div>
                            </a>

                            <a href="#" className="product-item">
                                <div className="product-item--img">
                                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1-3.jpg" alt="" />
                                </div>
                                <div className="product-item--icon">
                                    <div className="product-item--icon_card">
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                    </div>
                                </div>
                                <div className="desc">
                                    <p className="title">Native Union SMART 4 Charger 1</p>
                                    <p className="branch">LG</p>
                                    <p className="price">
                                        <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                    </p>
                                </div>
                            </a>

                            <a href="#" className="product-item">
                                <div className="product-item--img">
                                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.2-4.jpg" alt="" />
                                </div>
                                <div className="product-item--icon">
                                    <div className="product-item--icon_card">
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                    </div>
                                </div>
                                <div className="desc">
                                    <p className="title">Native Union SMART 4 Charger 1</p>
                                    <p className="branch">LG</p>
                                    <p className="price">
                                        <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                    </p>
                                </div>
                            </a>

                            <a href="#" className="product-item">
                                <div className="product-item--img">
                                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
                                </div>
                                <div className="product-item--icon">
                                    <div className="product-item--icon_card">
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                    </div>
                                </div>
                                <div className="desc">
                                    <p className="title">Native Union SMART 4 Charger 1</p>
                                    <p className="branch">LG</p>
                                    <p className="price">
                                        <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                    </p>
                                </div>
                            </a>

                            <a href="#" className="product-item">
                                <div className="product-item--img">
                                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
                                </div>
                                <div className="product-item--icon">
                                    <div className="product-item--icon_card">
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                    </div>
                                </div>
                                <div className="desc">
                                    <p className="title">Native Union SMART 4 Charger 1</p>
                                    <p className="branch">LG</p>
                                    <p className="price">
                                        <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                    </p>
                                </div>
                            </a>

                            <a href="#" className="product-item">
                                <div className="product-item--img">
                                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
                                </div>
                                <div className="product-item--icon">
                                    <div className="product-item--icon_card">
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                    </div>
                                </div>
                                <div className="desc">
                                    <p className="title">Native Union SMART 4 Charger 1</p>
                                    <p className="branch">LG</p>
                                    <p className="price">
                                        <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                    </p>
                                </div>
                            </a>

                            <a href="#" className="product-item">
                                <div className="product-item--img">
                                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
                                </div>
                                <div className="product-item--icon">
                                    <div className="product-item--icon_card">
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                        <Icon component={IconLogo1} />
                                    </div>
                                </div>
                                <div className="desc">
                                    <p className="title">Native Union SMART 4 Charger 1</p>
                                    <p className="branch">LG</p>
                                    <p className="price">
                                        <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                    </p>
                                </div>
                            </a>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}
