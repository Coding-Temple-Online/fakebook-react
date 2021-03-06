import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const Navbar = (props) => {
    const { currentUser } = useAuth();
    const handleLogin = () => {
        props.signIn();
    }

    const handleLogout = () => {
        props.signOut();
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">React E-Cart</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/typerace">Type Race</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employeemanager">Employee Manager</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/test">Test</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Shop</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <Link className="dropdown-item" to="/shop">Products</Link>
                            <Link className="dropdown-item" to="/shop/cart">
                                Cart
                                    <span className="float-right">
                                    <span className="badge badge-pill badge-secondary">{props.numItems}</span>
                                </span>
                            </Link>
                        </div>
                    </li>
                    {/* { props.user.logged_in ? (<li>Hello</li>) : null} */}
                </ul>
                <ul className="navbar-nav m1-auto">
                    {
                        !currentUser
                        ?
                        (<Link onClick={() => handleLogin()} to="" className="nav-link">Login</Link>)
                        :
                        (<Link onClick={() => handleLogout()} to="" className="nav-link">Logout</Link>)
                    }
                </ul>
            </div>
        </nav>
    )
}
