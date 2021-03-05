import React, { useEffect, useState } from 'react'
import { Display } from './Display';
import { ListItem } from './ListItem';

export const Test = () => {
    
    const [newList, setNewList] = useState([]);
    const [display, setDisplay] = useState({ info: {} })
    
    useEffect(() => {
        async function getNewList() {
             await fetch('./test.json')
                .then(r => r.json())
                .then(d => setNewList(d))
        };
        getNewList();
    }, [])

    const displayItem = (p) => {
        setDisplay({ info: p })
    }

    return (
        <div>
            <h3>This is the Test view</h3>
            <hr/>
            <ul className="list-group">
                {newList.map(item => <ListItem key={item.id} displayItem={displayItem} item={item} />)}
            </ul>
            <Display display={display} />
        </div>
    )
}
