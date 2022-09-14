import React, { useEffect, useState } from 'react';
import Icon from '@ant-design/icons';
import { ReactComponent as IconLogo1 } from '@assets/icons/Bag_alt_light.svg';
import { ReactComponent as IconLogo2 } from '@assets/icons/Copy_light.svg';
import { ReactComponent as IconLogo3 } from '@assets/icons/Pin_light.svg';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent, SlideTechStore } from '@components/common';
import { Link } from 'react-router-dom';

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
                                          <del>{data?.unitPrice} vnđ</del> {data?.discountPrice} vnđ
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

// const ItemSlider = datas => {
//     const elements = datas?.map(data => {
//         return (
//             <>
//                 <h1>holaaaâ</h1>
//                 <a href="#" className="product-item">
//                     <div className="product-item--img">
//                         <img src={data.thumbnailUrl} alt="" />
//                     </div>
//                     <div className="product-item--icon">
//                         <div className="product-item--icon_card">
//                             <Icon component={IconLogo1} />
//                             <Icon component={IconLogo1} />
//                             <Icon component={IconLogo1} />
//                         </div>
//                     </div>
//                     <div className="desc">
//                         <p className="title">Native Union SMART 4 Charger 1</p>
//                         <p className="branch">LG</p>
//                         <p className="price">
//                             <del>1.600.000 vnđ</del> 1.200.000 vnđ
//                         </p>
//                     </div>
//                 </a>
//             </>
//         );
//     });
//     console.log(elements);

//     return elements;
//     // return [
//     //     {
//     //         element: () => {
//     //             return (
//     //                 <a href="#" className="product-item">
//     //                     <div className="product-item--img">
//     //                         <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
//     //                     </div>
//     //                     <div className="product-item--icon">
//     //                         <div className="product-item--icon_card">
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                         </div>
//     //                     </div>
//     //                     <div className="desc">
//     //                         <p className="title">Native Union SMART 4 Charger 1</p>
//     //                         <p className="branch">LG</p>
//     //                         <p className="price">
//     //                             <del>1.600.000 vnđ</del> 1.200.000 vnđ
//     //                         </p>
//     //                     </div>
//     //                 </a>
//     //             );
//     //         },
//     //     },
//     //     {
//     //         element: () => {
//     //             return (
//     //                 <a href="#" className="product-item">
//     //                     <div className="product-item--img">
//     //                         <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
//     //                     </div>
//     //                     <div className="product-item--icon">
//     //                         <div className="product-item--icon_card">
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                         </div>
//     //                     </div>
//     //                     <div className="desc">
//     //                         <p className="title">Native Union SMART 4 Charger 1</p>
//     //                         <p className="branch">LG</p>
//     //                         <p className="price">
//     //                             <del>1.600.000 vnđ</del> 1.200.000 vnđ
//     //                         </p>
//     //                     </div>
//     //                 </a>
//     //             );
//     //         },
//     //     },
//     //     {
//     //         element: () => {
//     //             return (
//     //                 <a href="#" className="product-item">
//     //                     <div className="product-item--img">
//     //                         <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
//     //                     </div>
//     //                     <div className="product-item--icon">
//     //                         <div className="product-item--icon_card">
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                         </div>
//     //                     </div>
//     //                     <div className="desc">
//     //                         <p className="title">Native Union SMART 4 Charger 1</p>
//     //                         <p className="branch">LG</p>
//     //                         <p className="price">
//     //                             <del>1.600.000 vnđ</del> 1.200.000 vnđ
//     //                         </p>
//     //                     </div>
//     //                 </a>
//     //             );
//     //         },
//     //     },
//     //     {
//     //         element: () => {
//     //             return (
//     //                 <a href="#" className="product-item">
//     //                     <div className="product-item--img">
//     //                         <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
//     //                     </div>
//     //                     <div className="product-item--icon">
//     //                         <div className="product-item--icon_card">
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                         </div>
//     //                     </div>
//     //                     <div className="desc">
//     //                         <p className="title">Native Union SMART 4 Charger 1</p>
//     //                         <p className="branch">LG</p>
//     //                         <p className="price">
//     //                             <del>1.600.000 vnđ</del> 1.200.000 vnđ
//     //                         </p>
//     //                     </div>
//     //                 </a>
//     //             );
//     //         },
//     //     },
//     //     {
//     //         element: () => {
//     //             return (
//     //                 <a href="#" className="product-item">
//     //                     <div className="product-item--img">
//     //                         <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
//     //                     </div>
//     //                     <div className="product-item--icon">
//     //                         <div className="product-item--icon_card">
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                         </div>
//     //                     </div>
//     //                     <div className="desc">
//     //                         <p className="title">Native Union SMART 4 Charger 1</p>
//     //                         <p className="branch">LG</p>
//     //                         <p className="price">
//     //                             <del>1.600.000 vnđ</del> 1.200.000 vnđ
//     //                         </p>
//     //                     </div>
//     //                 </a>
//     //             );
//     //         },
//     //     },
//     //     {
//     //         element: () => {
//     //             return (
//     //                 <a href="#" className="product-item">
//     //                     <div className="product-item--img">
//     //                         <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
//     //                     </div>
//     //                     <div className="product-item--icon">
//     //                         <div className="product-item--icon_card">
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                         </div>
//     //                     </div>
//     //                     <div className="desc">
//     //                         <p className="title">Native Union SMART 4 Charger 1</p>
//     //                         <p className="branch">LG</p>
//     //                         <p className="price">
//     //                             <del>1.600.000 vnđ</del> 1.200.000 vnđ
//     //                         </p>
//     //                     </div>
//     //                 </a>
//     //             );
//     //         },
//     //     },
//     //     {
//     //         element: () => {
//     //             return (
//     //                 <a href="#" className="product-item">
//     //                     <div className="product-item--img">
//     //                         <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
//     //                     </div>
//     //                     <div className="product-item--icon">
//     //                         <div className="product-item--icon_card">
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                             <Icon component={IconLogo1} />
//     //                         </div>
//     //                     </div>
//     //                     <div className="desc">
//     //                         <p className="title">Native Union SMART 4 Charger 1</p>
//     //                         <p className="branch">LG</p>
//     //                         <p className="price">
//     //                             <del>1.600.000 vnđ</del> 1.200.000 vnđ
//     //                         </p>
//     //                     </div>
//     //                 </a>
//     //             );
//     //         },
//     //     },
//     // ];
// };

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
