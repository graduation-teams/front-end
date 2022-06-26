import React, { Component } from 'react';
import Slider from 'react-slick';

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
// }

export default class BranchProducts extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
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
            <section className="branch-products mb-5">
                <div className="container-1200">
                    <Slider {...settings}>
                        <div>
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-1.png" alt="" className="img-branch" />
                        </div>
                        <div>
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-1.png" alt="" className="img-branch" />
                        </div>
                        <div>
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-1.png" alt="" className="img-branch" />
                        </div>
                        <div>
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-1.png" alt="" className="img-branch" />
                        </div>
                        <div>
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-1.png" alt="" className="img-branch" />
                        </div>
                        <div>
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-1.png" alt="" className="img-branch" />
                        </div>
                        <div>
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-1.png" alt="" className="img-branch" />
                        </div>
                        <div>
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-1.png" alt="" className="img-branch" />
                        </div>
                        <div>
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-1.png" alt="" className="img-branch" />
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}
