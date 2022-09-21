import React, { useEffect, useState } from 'react';
import Icon from '@ant-design/icons';
import { ReactComponent as IconLogo1 } from '@assets/icons/Bag_alt_light.svg';
import { ReactComponent as IconLogo2 } from '@assets/icons/Copy_light.svg';
import { ReactComponent as IconLogo3 } from '@assets/icons/Pin_light.svg';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent, SlideTechStore } from '@components/common';
import { Link } from 'react-router-dom';
import { formatCurrency } from '@utils/helpers';

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
    speed: 2000,
    autoplaySpeed: 4000,
    loop: true,
    arrows: true,
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

const ItemSlider = datas => {
    return datas
        ? datas.map(data => {
              return {
                  element: () => {
                      return (
                          <>
                              <Link to={`/product-detail/product-id=${data?.slug}`} key={data?.key} className="product-item">
                                  <div className="product-item--img">
                                      <img src={data?.thumbnailUrl} alt="" />
                                  </div>
                                  <div className="product-item--icon">
                                      <div className="product-item--icon_card">
                                          <Icon component={IconLogo1} />
                                          <Icon component={IconLogo2} />
                                          <Icon component={IconLogo3} />
                                      </div>
                                  </div>
                                  <div className="desc">
                                      <p className="title">{data?.name}</p>
                                      <p className="branch">LG</p>
                                      <p className="price">
                                          {data?.discountPrice > 0 ? (
                                              <React.Fragment>
                                                  <p className="price">
                                                      <del>{formatCurrency(data?.unitPrice, 'vnđ')}</del> -{formatCurrency(data?.discountPrice, 'vnđ')}
                                                  </p>
                                              </React.Fragment>
                                          ) : (
                                              <span>${data?.unitPrice}</span>
                                          )}
                                      </p>
                                  </div>
                              </Link>
                          </>
                      );
                  },
              };
          })
        : [];
};

function ProductsThree({ dataAPI }, ...props) {
    return (
        <section className="products-three mb-5">
            <div className="container-1200">
                <div className="products-box">
                    <SlideTechStore items={ItemSlider(dataAPI)} settings={settings} isOverride={false} />
                </div>
            </div>
        </section>
    );
}
export default withErrorBoundary(ProductsThree, {
    FallbackComponent: ErrorComponent,
});
