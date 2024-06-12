import React from 'react'

const ListEmployeeComponent = () => {
    const dummyData = [
        {
            "id": 1,
            "firstName": "Amit",
            "lastName": "Yerva",
            "email": "amit@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Sagar",
            "lastName": "Yerva",
            "email": "sagar@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Shweta",
            "lastName": "Yerva",
            "email": "shweta@gmail.com"
        }
    ]

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
                	dummyData.map(employee => 
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