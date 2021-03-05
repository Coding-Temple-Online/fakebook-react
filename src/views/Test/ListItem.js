import React from 'react'

export const ListItem = (props) => {
    const item = props.item;
    return (
        <li onClick={() => props.displayItem(item)} className="list-group-item">{item.name}</li>
    )
}
