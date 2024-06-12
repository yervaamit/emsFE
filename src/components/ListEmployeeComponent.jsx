import React, { useState } from 'react'
import { useEffect } from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])
	useEffect(() => {
		listEmployees().then((response) => {
			setEmployees(response.data);
		}).catch(error => {
			console.error(error);
		})
	}, [])

  return (
    <div className='container'>
        <h2>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
					<th>Employee Id</th>
                    <th>Employee first name</th>
                    <th>Employee last name</th>
                    <th>Employee email</th>
                </tr>
            </thead>
            <tbody>
                {
                	employees.map(employee => 
                	<tr key={employee.id}>
                    	<td>{employee.id}</td>
                    	<td>{employee.firstName}</td>
                    	<td>{employee.lastName}</td>
                    	<td>{employee.email}</td>
                	</tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent