import React, { Component } from 'react'

export default class CartItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemQuantity: props.item.quantity 
        }
    }

    handleQuantity = (product, e) => {
        let quantity = e.target.value;
        this.props.updateQuantity(product, quantity);
    }

    render() {
        const item = this.props.item;

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>
                    <form>
                        <input type="hidden" name="product_id" defaultValue="" />
                        <div className="form-row">
                            <div className="col-md-4">
                                <input onChange={(e) => this.handleQuantity(item, e)} type="number" min="0" max="99" className="form-control" name="quantity" defaultValue={item.quantity} />
                            </div>
                            <div className="col-md-3" style={{visibility: "hidden"}}>
                                <button type="submit" className="btn btn-info">Update</button>
                            </div>
                        </div>
                    </form>
                </td>
                <td>
                    <button className="btn btn-danger">
                        Remove
                        <span>
                            <i className="fa fa-trash"></i>
                        </span>
                    </button>
                </td>
            </tr>
        )
    }
}
