import React, { useState } from 'react'

export const Race = () => {
    const [userText, setUserText] = useState('');

    return (
        <div>
            <h3>Race</h3>
            <div className="row">
                <div className="col-md-6">
                    <input className="form-control" type="text" />
                </div>
            </div>
        </div>
    )
}
