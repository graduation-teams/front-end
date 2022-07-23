import React  from 'react';
import {withErrorBoundary} from 'react-error-boundary'
import { ErrorComponent, SlideTechStore  } from '@components/common';

const settings = {
    customPaging: function (i) {
        return (
            <a className="item__big__image">
                <img src="https://cdn.tgdd.vn/Products/Images/44/249152/msi-gaming-ge66-raider-11ug-i7-258vn-600x600.jpg" />
            </a>
        );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const ItemSlider = [
    {
        element : ()=>{
            return (<div className="item__small__image">
            <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/0/_0003_60852_laptop_lenovo_legion_7_16a_2.jpg" />
        </div>)
        }
    },
    {
        element : ()=>{
            return (<div className="item__small__image">
            <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/0/_0003_60852_laptop_lenovo_legion_7_16a_2.jpg" />
        </div>)
        }
    },
    {
        element : ()=>{
            return (<div className="item__small__image">
            <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/0/_0003_60852_laptop_lenovo_legion_7_16a_2.jpg" />
        </div>)
        }
    },
    {
        element : ()=>{
            return (<div className="item__small__image">
            <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/0/_0003_60852_laptop_lenovo_legion_7_16a_2.jpg" />
        </div>)
        }
    }
]
function ItemSlideShow() {
    return (
        <div>
            <h2>Custom Paging</h2>
            <SlideTechStore items={ItemSlider} settings={settings} isOverride={false} />
        </div>
    );
}

export default withErrorBoundary(ItemSlideShow, {
    FallbackComponent: ErrorComponent,
});
