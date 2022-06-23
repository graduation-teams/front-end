import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Btn from '../cummon/button';

export default class SlideShow extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        };
        return (
            <section className="slideshow__home">
                <div>
                    <Slider {...settings}>
                        <div className="slideshow__home__img">
                            <img src="https://thumbs.dreamstime.com/b/banner-professional-hardworking-lawyer-hand-typing-laptop-copy-space-flat-lay-180925014.jpg" alt="" />
                            <div className="slideshow__home__inner">
                                <h1>Matrice 200 series</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vero illum alias a eveniet ab rerum enim saepe optio dolores cupiditate ex modi omnis, sequi quaerat voluptatem minima est.</p>
                                <Btn className="slideshow__home__inner--btn">BUY NOW</Btn>
                            </div>
                        </div>
                        <div className="slideshow__home__img">
                            <img src="https://thumbs.dreamstime.com/b/banner-professional-hardworking-lawyer-hand-typing-laptop-copy-space-flat-lay-180925014.jpg" alt="" />
                            <div className="slideshow__home__inner">
                                <h1>Matrice 200 series</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vero illum alias a eveniet ab rerum enim saepe optio dolores cupiditate ex modi omnis, sequi quaerat voluptatem minima est.</p>
                                <Btn className="slideshow__home__inner--btn">BUY NOW</Btn>
                            </div>
                        </div>
                        <div className="slideshow__home__img">
                            <img src="https://thumbs.dreamstime.com/b/banner-professional-hardworking-lawyer-hand-typing-laptop-copy-space-flat-lay-180925014.jpg" alt="" />
                            <div className="slideshow__home__inner">
                                <h1>Matrice 200 series</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vero illum alias a eveniet ab rerum enim saepe optio dolores cupiditate ex modi omnis, sequi quaerat voluptatem minima est.</p>
                                <Btn className="slideshow__home__inner--btn">BUY NOW</Btn>
                            </div>
                        </div>
                        <div className="slideshow__home__img">
                            <img src="https://thumbs.dreamstime.com/b/banner-professional-hardworking-lawyer-hand-typing-laptop-copy-space-flat-lay-180925014.jpg" alt="" />
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
