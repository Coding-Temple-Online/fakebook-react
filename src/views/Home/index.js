import React from 'react'

export const Home = (props) => {
    // console.log(props.user)
    return (
        <div>
            <h3>Home</h3>
            <hr/>
            Welcome{props.user.authUser.displayName ? `, ${props.user.authUser.displayName}` : '!' }
        </div>
    )
}
