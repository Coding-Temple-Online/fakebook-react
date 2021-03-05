import React from 'react'
import { CartList } from '../../components/CartList';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe("pk_test_51HQDVkBAC7MChR4eGnboooNdN9FPPSNun8qBxyaG8Na6GSC8XnR7QrxNjOjm9D6MT8my6wsmkGgrHcspdsnZ8YpF00Ljptt61D");

export const ShopCart = (props) => {
    // const [message, setMessage] = useState('');
    // useEffect(() => {
    //     const query = new URLSearchParams(window.location.search);
    //     if (query.get("success")) {
    //         setMessage("Order placed! You will receive an email confirmation.");
    //     }
    //     if (query.get("canceled")) {
    //         setMessage(
    //             "Order canceled -- continue to shop around and checkout when you're ready."
    //         );
    //     }
    // }, [])

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        fetch('http://localhost:5000/shop/checkout', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'items': Object.values(props.cart.items) })
        })
        .then(r => r.json())
        .then(d => {
            stripe.redirectToCheckout({
                sessionId: d.id
            })
        })
    }

    return (
        <div>
            <h3>Cart</h3>
            <hr />
            <div className="table-responsive">
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
                        <CartList cart={props.cart} handleQuantityChange={props.handleQuantityChange} />
                        <tr>
                            <td colSpan="3"></td>
                            <td>
                                <strong className="float-right">Subtotal</strong>
                            </td>
                            <td>
                                <strong>${props.subtotal.toFixed(2)}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3"></td>
                            <td>
                                <strong className="float-right">Tax</strong>
                            </td>
                            <td>
                                <strong>${props.taxTotal.toFixed(2)}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3"></td>
                            <td>
                                <strong className="float-right">Grand Total</strong>
                            </td>
                            <td>
                                <strong>${props.grandTotal.toFixed(2)}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4"></td>
                            <td>
                                <button onClick={handleCheckout} className="btn btn-success">Checkout</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
