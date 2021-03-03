import React, { useEffect, useState } from 'react'
import { Employee } from '../../components/Employee'

export const EmployeeManager = () => {
    const [employees, setEmployees] = useState([])
    const [employeeDisplay, setEmployeeDisplay] = useState({ info: {} })

    useEffect(() => {
        async function getEmployees() {
            await fetch('./employees.json')
                .then(r => r.json())
                .then(data => {
                    let employeeList = [];
                    for (const obj of data) {
                        employeeList.push({
                            ...obj,
                            online: false
                        })
                    }
                    setEmployees(employeeList)
                })
        }
        getEmployees();
    }, [])

    const updateEmployeeDisplay = emp => {
        setEmployeeDisplay({ info: emp });
    }

    const setEmployeeStatus = (info) => {
        let employeeList = [];

        for (const e of employees) {
            if (e.id !== info.id) {
                employeeList.push(e)
                // e.online = true;
            }
            else {
                let newEmp = { 
                    ...e, 
                    online: info.online ? false : true };
                employeeList.push(newEmp);
                setEmployeeDisplay({ info: newEmp })
            }
        }
        setEmployees(employeeList);
    }
    

    return (
        <div>
            <h3>Employee Manager</h3>
            <hr />
            <div className="row">
                <div className="col-md-9">
                    <ul className="list-group">
                        {employees.map(e => (
                            <Employee updateEmployeeDisplay={updateEmployeeDisplay} key={e.id} info={e} />
                        ))}
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>{employeeDisplay.info.firstName} {employeeDisplay.info.lastName} ({employeeDisplay.info.age})</h5>
                    <p>{employeeDisplay.info.location}</p>
                    <button onClick={() => setEmployeeStatus(employeeDisplay.info)} className="btn btn-block btn-info">
                        Set as {!employeeDisplay.info.online ? 'Online' : 'Offline'}
                    </button>
                </div>
            </div>
        </div>
    )
}
