import React from 'react';
import { Product } from '../../components/Product';

export const Shop = (props) => {
    return (
        <div>
            <div>
                <h3>Shop</h3>
                <hr />
                <div className="card-deck">
                    {props.products.map((p, idx) => <Product addToCart={props.addToCart} info={p} key={idx} />)}
                </div>
            </div>
        </div>
    )
}
