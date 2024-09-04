import DeleteModal from './DeleteModal';
import './EmployeesPage.css';
import {useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeesPage () {

    const baseURL = 'http://localhost:8080/api/employees';

    const [showModal, setShowModal] = useState(false);

    async function getEmployees() {
        try {
            const response = await axios.get(`${baseURL}`);
            console.log('done', response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        console.log("inside useEffect")
        getEmployees();
    }, [])
    
    const navigate = useNavigate();
    function navigateToAddUpdatePage () {
        navigate("/addUpdateEmployee")
    }

    function openDeleteModal () {
        setShowModal(!showModal);
    }


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
                            <button className='actionButton updateButton' onClick={() => navigateToAddUpdatePage()}>
                                Update
                            </button>
                            <button className='actionButton deleteButton' onClick={() => openDeleteModal()}>
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
                        <button className='actionButton updateButton' onClick={() => navigateToAddUpdatePage()}>
                                Update
                            </button>
                            <button className='actionButton deleteButton' onClick={() => navigateToDeletePage()}>
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
                        <button className='actionButton updateButton' onClick={() => navigateToAddUpdatePage()}>
                                Update
                            </button>
                            <button className='actionButton deleteButton' onClick={() => navigateToDeletePage()}>
                                Delete
                            </button>
                        </td>
                    </tr>   
                </tbody>
            </table>
            {
              showModal ? <DeleteModal></DeleteModal> : <div></div>
            }            
        </div>
    )
}

export default EmployeesPage;