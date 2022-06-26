import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Btn from '../cummon/button';
import Icon from '@ant-design/icons';
import SlideShow1 from '@assets/images/electron01-home-slide1.jpg';
import SlideShow2 from '@assets/images/slide-2.png';
import SlideShow3 from '@assets/images/slide-3.png';

export default class SlideShow extends Component {
    render() {
        const settings = {
            dots: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        };
        return (
            <section className="slideshow__home mb-5">
                <div>
                    <Slider {...settings}>
                        <div className="slideshow__home__img">
                            <img src={SlideShow1} alt="" />
                            <div className="slideshow__home__inner">
                                <h1>Matrice 200 series</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vero illum alias a eveniet ab rerum enim saepe optio dolores cupiditate ex modi omnis, sequi quaerat voluptatem minima est.</p>
                                <Btn className="slideshow__home__inner--btn">BUY NOW</Btn>
                            </div>
                        </div>
                        <div className="slideshow__home__img">
                            <img src={SlideShow2} alt="" />
                            <div className="slideshow__home__inner">
                                <h1>Matrice 200 series</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vero illum alias a eveniet ab rerum enim saepe optio dolores cupiditate ex modi omnis, sequi quaerat voluptatem minima est.</p>
                                <Btn className="slideshow__home__inner--btn">BUY NOW</Btn>
                            </div>
                        </div>
                        <div className="slideshow__home__img">
                            <img src={SlideShow3} alt="" />
                            <div className="slideshow__home__inner">
                                <h1>Matrice 200 series</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vero illum alias a eveniet ab rerum enim saepe optio dolores cupiditate ex modi omnis, sequi quaerat voluptatem minima est.</p>
                                <Btn className="slideshow__home__inner--btn">BUY NOW</Btn>
                            </div>
                        </div>
                        <div className="slideshow__home__img">
                            <img src={SlideShow1} alt="" />
                            <div className="slideshow__home__inner">
                                <h1>Matrice 200 series</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vero illum alias a eveniet ab rerum enim saepe optio dolores cupiditate ex modi omnis, sequi quaerat voluptatem minima est.</p>
                                <Btn className="slideshow__home__inner--btn">BUY NOW</Btn>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}
