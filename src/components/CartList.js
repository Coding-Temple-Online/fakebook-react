import React, { Component } from 'react';
import CartItem from './CartItem';

export default class CartList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.cart.map((item, idx) => <CartItem updateQuantity={this.props.updateQuantity} key={idx} item={item} />)}
            </React.Fragment>
        )
    }
}
