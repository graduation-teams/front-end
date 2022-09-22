import React from 'react';
import { ReactComponent as Ytb } from '@assets/icons/YouTube.svg';
import Btn from '@components/common/button';
import Icon, { ShoppingCartOutlined } from '@ant-design/icons';
function EmtyCart(props) {
    return (
        <div className="cart__steps--emty">
            <ShoppingCartOutlined
                style={{
                    fontSize: '24px',
                }}
                className="header_icon"
            />
            <h3>YOUR SHOPPING CART IS EMPTY</h3>
            <p>We invite you to get acquainted with an assortment of our shop.Surely you can find something for yourself!</p>
            {/* <Btn className="bg-black">RETURN TO SHOP</Btn> */}
        </div>
    );
}

export default EmtyCart;
