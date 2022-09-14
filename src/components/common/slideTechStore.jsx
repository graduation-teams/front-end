import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import PropTypes from 'prop-types';

const configSlider = {
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
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
/**
 *
 * @param {array} items
 * @param {object} settings
 * @param {boolean} isOverride
 * @param  {...any} props
 * @returns
 */
function SlideTechStore({ items, settings, isOverride }, ...props) {
    const [arrayItems, setArrayItems] = useState(items);
    const [config, setConfig] = useState(configSlider);

    useEffect(() => {
        if (items.length > 0) {
            setArrayItems(items);
        }
    }, [items.length]);

    useEffect(() => {
        if (settings && !isOverride) {
            return setConfig({ ...settings });
        }
        if (settings && isOverride) {
            return setConfig({ ...config, settings });
        }
    }, [settings]);

    console.log(arrayItems);
    return (
        <React.Fragment>
            <Slider {...config} {...props}>
                {arrayItems.map(({ element: Element }, index) => {
                    return <Element key={index} />;
                })}
            </Slider>
        </React.Fragment>
    );
}

SlideTechStore.propTypes = {
    items: PropTypes.array,
    settings: PropTypes.object,
    props: PropTypes.any,
    isOverride: PropTypes.bool,
};

SlideTechStore.defaultProps = {
    items: [],
    settings: {},
    isOverride: true,
};

export default withErrorBoundary(SlideTechStore, {
    FallbackComponent: ErrorComponent,
});
