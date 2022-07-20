import React from 'react';
import Icon from '@ant-design/icons';
import { ReactComponent as IconLogo1 } from '@assets/icons/footer-1.svg';
import {withErrorBoundary} from 'react-error-boundary'
import { ErrorComponent, SlideTechStore  } from '@components/common';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}
const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    loop: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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

const ItemSlider = [
    {
        element : ()=>{
            return(<a href="#" className="product-item">
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
        </a>)
        }
    },
    {
        element : ()=>{
            return(<a href="#" className="product-item">
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
        </a>)
        }
    },
    {
        element : ()=>{
            return(<a href="#" className="product-item">
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
        </a>)
        }
    },
    {
        element : ()=>{
            return(<a href="#" className="product-item">
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
        </a>)
        }
    },
    {
        element : ()=>{
            return(<a href="#" className="product-item">
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
        </a>)
        }
    },
    {
        element : ()=>{
            return(<a href="#" className="product-item">
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
        </a>)
        }
    },
    {
        element : ()=>{
            return(<a href="#" className="product-item">
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
        </a>)
        }
    }
];


function relatedProducts(){
    return (
        <section className="products-three mb-5">
            <div className="container-1200">
                <h1 style={{ fontSize: '24px', textAlign: 'center' }}>Related Products</h1>
                <div className="products-box">
                <SlideTechStore items={ItemSlider} settings={settings} isOverride={false} />
                </div>
            </div>
        </section>
    );
}


export default withErrorBoundary(relatedProducts, {
    FallbackComponent: ErrorComponent,
});