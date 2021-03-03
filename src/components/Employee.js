import React from 'react'

export const Employee = (props) => {
    const e = props.info;
    return (
        <React.Fragment>
            <li onClick={() => props.updateEmployeeDisplay(e)} className="list-group-item">
                {e.firstName} {e.lastName}
                <span className={e.online ? "float-right badge badge-pill badge-success" : "float-right badge badge-pill badge-danger"}>
                    {e.online ? 'Online' : 'Offline'}
                </span>
            </li>
        </React.Fragment>
    )
}
