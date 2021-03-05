import React from 'react'

export const Display = (props) => {
    const info = props.display.info;

    return (
        <ul className="list-unstyled" style={{ marginTop: '15px' }}>
            <li>
                <strong>id: {info.id}</strong>
            </li>
            <li>
                <strong>name: {info.name}</strong>
            </li>
            <li>
                <strong>price: {info.price}</strong>
            </li>
        </ul>
    )
}
