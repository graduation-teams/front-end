import React from 'react';
import { Btn } from '@components/common';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent, SlideTechStore } from '@components/common';

const ItemSlider = [
    {
        element: () => {
            return (
                <div className="slideshow__home__img slideshow__home__bgImage1">
                    <div className="slideshow__home__inner slideshow__home__inner-active">
                        <h1>Matrice 200 series</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vero illum alias a eveniet ab rerum enim saepe optio dolores cupiditate ex modi omnis, sequi quaerat voluptatem minima est.</p>
                        <Btn className="slideshow__home__inner--btn">BUY NOW</Btn>
                    </div>
                </div>
            );
        },
    },
    {
        element: () => {
            return (
                <div className="slideshow__home__img slideshow__home__bgImage2">
                    <div className="slideshow__home__inner slideshow__home__inner-active">
                        <h1>Matrice 200 series</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vero illum alias a eveniet ab rerum enim saepe optio dolores cupiditate ex modi omnis, sequi quaerat voluptatem minima est.</p>
                        <Btn className="slideshow__home__inner--btn">BUY NOW</Btn>
                    </div>
                </div>
            );
        },
    },
    {
        element: () => {
            return (
                <div className="slideshow__home__img slideshow__home__bgImage3">
                    <div className="slideshow__home__inner">
                        <h1>Matrice 200 series</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vero illum alias a eveniet ab rerum enim saepe optio dolores cupiditate ex modi omnis, sequi quaerat voluptatem minima est.</p>
                        <Btn className="slideshow__home__inner--btn">BUY NOW</Btn>
                    </div>
                </div>
            );
        },
    },
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className + ' slideshow__home__next'} style={{ ...style, display: 'block' }} onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className + ' slideshow__home__prev'} style={{ ...style, display: 'block' }} onClick={onClick}></div>;
}
const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    loop: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function SlideShow() {
    return (
        <React.Fragment>
            <section className="slideshow__home mb-5">
                <SlideTechStore items={ItemSlider} settings={settings} isOverride={false} />
            </section>
        </React.Fragment>
    );
}
export default withErrorBoundary(SlideShow, {
    FallbackComponent: ErrorComponent,
});
