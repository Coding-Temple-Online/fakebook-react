import React, { Component } from 'react'
import CartList from '../../components/CartList';

export default class ShopCart extends Component {
    render() {
        const subtotal = this.props.deepCart.length > 0 ? this.props.deepCart.reduce((x, y) => x + y.price, 0) : 0;
        const taxtotal = this.props.deepCart.length > 0 ? this.props.deepCart.reduce((x, y) => x + y.tax, 0) : 0;
        const grandtotal = this.props.deepCart.length > 0 ? this.props.deepCart.reduce((x, y) => (x + y.price + y.tax), 0) : 0;

        return (
            <div>
                <h3>Cart</h3>
                <hr />
                <div className=" table-responsive">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartList cart={this.props.cart} updateQuantity={this.props.updateQuantity} />
                            <tr>
                                <td colSpan="3"></td>
                                <td>
                                    <strong className="float-right">Subtotal</strong>
                                </td>
                                <td>
                                    <strong>${subtotal.toFixed(2)}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3"></td>
                                <td>
                                    <strong className="float-right">Tax</strong>
                                </td>
                                <td>
                                    <strong>${taxtotal.toFixed(2)}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3"></td>
                                <td>
                                    <strong className="float-right">Grand Total</strong>
                                </td>
                                <td>
                                    <strong>${grandtotal.toFixed(2)}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4"></td>
                                <td>
                                    <a href="/" className="btn btn-success">Checkout</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
