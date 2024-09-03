import './DepartmentsPage.css'

function DepartmentsPage () {
    return (
        <div className='departmentPageContainer'>
            <h1>List Of Departments</h1>
            <div className='buttonContainer'>
                <button className='addButton'>Add Department</button>
            </div>
            <table className='departmentTable'>
                <thead>
                    <tr>
                        <th className='tableTitles'>
                            Department Id
                        </th>
                        <th className='tableTitles'>
                            Department Name
                        </th>
                        <th className='tableTitles'>
                            Department Description
                        </th>
                        <th className='tableTitles'>
                            Actions
                        </th>   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='tableTitles'>
                            1
                        </th>
                        <td className='tableValues'>
                            Human Resources
                        </td>
                        <td className='tableValues'>
                            Hiring and Firing People
                        </td>
                        <td className='tableValues actionsContainer'>
                            <button className='actionButton updateButton'>
                                Update
                            </button>
                            <button className='actionButton deleteButton'>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className='tableTitles'>
                            2
                        </th>
                        <td className='tableValues'>
                            Research & Development
                        </td>
                        <td className='tableValues'>
                            Play & Some Research
                        </td>
                        <td className='tableValues actionsContainer'>
                            <button className='actionButton updateButton'>
                                Update
                            </button>
                            <button className='actionButton deleteButton'>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className='tableTitles'>
                            3
                        </th>
                        <td className='tableValues'>
                            IT
                        </td>
                        <td className='tableValues'>
                            Computer, Coffee and Cats
                        </td>
                        <td className='tableValues actionsContainer'>
                            <button className='actionButton updateButton'>
                                Update
                            </button>
                            <button className='actionButton deleteButton'>
                                Delete
                            </button>
                        </td>
                    </tr>   
                </tbody>
            </table>
        </div>
    )
}

export default DepartmentsPage;