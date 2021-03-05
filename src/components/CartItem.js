import React from 'react'

export const CartItem = (props) => {
    const item = props.item;

    return (
        <tr>
            <td>{item.product.name}</td>
            <td>{item.product.description}</td>
            <td>${item.product.price}</td>
            <td>
                <form>
                    <input type="hidden" name="product_id" defaultValue="" />
                    <div className="form-row">
                        <div className="col-md-4">
                            <input onChange={(e) => props.handleQuantityChange(e, item)} type="number" min="0" max="99" className="form-control" name="quantity" defaultValue={item.quantity} />
                            {/* <input onChange={(e) => this.handleQuantity(item, e)} type="number" min="0" max="99" className="form-control" name="quantity" defaultValue={item.quantity} /> */}
                        </div>
                        <div className="col-md-3" style={{ visibility: "hidden" }}>
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
