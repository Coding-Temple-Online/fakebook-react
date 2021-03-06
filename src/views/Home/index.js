import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

export const Home = (props) => {
    const { currentUser } = useAuth();
    // console.log(props.user)
    return (
        <div>
            <h3>Home</h3>
            <hr/>
            Welcome{currentUser ? `, ${currentUser.displayName}` : '!' }
        </div>
    )
}
