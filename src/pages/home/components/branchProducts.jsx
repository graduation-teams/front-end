import React, { Component } from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent, SlideTechStore } from '@components/common';

const ItemSlider = [
    {
        element: () => {
            return (
                <div>
                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-5.png" alt="" className="img-branch" />
                </div>
            );
        },
    },
    {
        element: () => {
            return (
                <div>
                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-1.png" alt="" className="img-branch" />
                </div>
            );
        },
    },
    {
        element: () => {
            return (
                <div>
                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-4.png" alt="" className="img-branch" />
                </div>
            );
        },
    },
    {
        element: () => {
            return (
                <div>
                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-6.png" alt="" className="img-branch" />
                </div>
            );
        },
    },
    {
        element: () => {
            return (
                <div>
                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-3.png" alt="" className="img-branch" />
                </div>
            );
        },
    },
    {
        element: () => {
            return (
                <div>
                    <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-6.png" alt="" className="img-branch" />
                </div>
            );
        },
    },
];

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
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
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};

function BranchProducts() {
    return (
        <section className="branch-products mb-5">
            <div className="container-1200">
                <SlideTechStore items={ItemSlider} settings={settings} isOverride={false} />
            </div>
        </section>
    );
}
export default withErrorBoundary(BranchProducts, {
    FallbackComponent: ErrorComponent,
});
