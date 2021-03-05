import React from 'react'
import { CartItem } from './CartItem'

export const CartList = (props) => {
    return (
        <React.Fragment>
            {Object.values(props.cart.items).map((item, idx) => <CartItem handleQuantityChange={props.handleQuantityChange} key={idx} item={item} />)}
            {/* {props.cart.map((item, idx) => <CartItem updateQuantity={props.updateQuantity} key={idx} item={item} />)} */}
        </React.Fragment>
    )
}
