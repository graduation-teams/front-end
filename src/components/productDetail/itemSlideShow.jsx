import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const baseUrl = window.location.origin + '@assets/images';

export default class ItemSlideShow extends Component {
    render() {
        const settings = {
            customPaging: function (i) {
                return (
                    <a className="item__big__image">
                        {/* <img src={`${baseUrl}/slide-${i + 1}.png`} /> */}
                        <img src="https://cdn.tgdd.vn/Products/Images/44/249152/msi-gaming-ge66-raider-11ug-i7-258vn-600x600.jpg" />
                    </a>
                );
            },
            dots: true,
            dotsClass: 'slick-dots slick-thumb',
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div>
                <h2>Custom Paging</h2>
                <Slider {...settings}>
                    <div className="item__small__image">
                        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/0/_0003_60852_laptop_lenovo_legion_7_16a_2.jpg" />
                    </div>
                    <div className="item__small__image">
                        <img src="https://cdn.tgdd.vn/Products/Images/44/249152/msi-gaming-ge66-raider-11ug-i7-258vn-600x600.jpg" />
                    </div>
                    <div className="item__small__image">
                        <img src="https://cdn.tgdd.vn/Products/Images/44/249152/msi-gaming-ge66-raider-11ug-i7-258vn-600x600.jpg" />
                    </div>
                    {/* <div>
                        <img src={baseUrl + '/abstract04.jpg'} />
                    </div> */}
                </Slider>
            </div>
        );
    }
}
