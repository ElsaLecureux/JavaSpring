import DeleteModal from './DeleteModal';
import './EmployeesPage.css';
import { useNavigate, useLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:8080/api/employees';

export async function loader() {
    try {
        console.log('inside loader');
        const employees = await axios.get(`${baseURL}`);  
        return { employees };
    } catch (error) {
        console.error(error);
    }
};

function EmployeesPage () {

    const { employeesCharged } = useLoaderData();
    
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({});

    const [showModal, setShowModal] = useState(false);    
    
    const navigate = useNavigate();
    function navigateToAddUpdatePage () {
        navigate("/addUpdateEmployee")
    }

    function openDeleteModal (id) {
        setEmployee(id)
        setShowModal(!showModal);
    }

    useEffect(()=> {
        setEmployees(employeesCharged);
    },[])


    return (
        <div className='employeesPageContainer PageContainer'>
            <h1>List Of Employees</h1>
            <div className='buttonContainer'>
                <button className='addButton' onClick={() => navigateToAddUpdatePage()}>
                    Add Employee                 
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
                    {
                        employees.map((employee) => {
                            return (
                                <tr key= {employee.id}>
                                    <th className='tableTitles'>
                                        {employee.id}
                                    </th>
                                    <td className='tableValues'>
                                        {employee.firstName}
                                    </td>
                                    <td className='tableValues'>
                                        {employee.lastName}
                                    </td>
                                    <td className='tableValues'>
                                        {employee.email}
                                    </td>
                                    <td className='tableValues actionsContainer'>
                                        <button className='actionButton updateButton' onClick={() => navigateToAddUpdatePage()}>
                                            Update
                                        </button>
                                        <button className='actionButton deleteButton' onClick={() => openDeleteModal(employee)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>  
                            )
                        })
                    }
                </tbody>
            </table>
            {
              showModal ? <DeleteModal entity={employee} entities={employees} setEntities={setEmployees} setShowModal={setShowModal} label="employees"></DeleteModal> : <div></div>
            }            
        </div>
    )
}

export default EmployeesPage;