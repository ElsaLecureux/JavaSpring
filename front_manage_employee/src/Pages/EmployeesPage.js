import './EmployeesPage.css';
import { Link, useNavigate } from "react-router-dom";

function EmployeesPage () {

    const navigate = useNavigate();

    return (
        <div className='employeesPageContainer'>
            <h1>List Of Employees</h1>
            <div className='buttonContainer'>
                <button className='addButton'>
                    <Link className='link' to="/addUpdateEmployee">Add Employee</Link>                    
                </button>
            </div>
            <table className='employeesTable'>
                <thead>
                    <tr>
                        <th className='tableTitles'>
                            Employee Id
                        </th>
                        <th  className='tableTitles'>
                            Employee First Name
                        </th>
                        <th className='tableTitles'>
                            Employee Last Name
                        </th>
                        <th className='tableTitles'>
                            Employee Email ID
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
                            James
                        </td>
                        <td className='tableValues'>
                            Lopez
                        </td>
                        <td className='tableValues'>
                            james@mail.com
                        </td>
                        <td className='tableValues actionsContainer'>
                            <button className='actionButton updateButton' onClick={navigate("/addUpdateEmployee")}>
                                Update
                            </button>
                            <button className='actionButton deleteButton' onClick={navigate("/deleteEmployee")}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className='tableTitles'>
                            2
                        </th>
                        <td className='tableValues'>
                            Thierry
                        </td>
                        <td className='tableValues'>
                            Ung
                        </td>
                        <td className='tableValues'>
                            t.ung@mail.com
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
                            May
                        </td>
                        <td className='tableValues'>
                            N'Soenzoc
                        </td>
                        <td className='tableValues'>
                            May-NS@mail.com
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

export default EmployeesPage;