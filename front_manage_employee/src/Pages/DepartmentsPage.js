import './DepartmentsPage.css';
import {useNavigate } from "react-router-dom";
import { useState } from 'react';
import DeleteModal from './DeleteModal';

function DepartmentsPage () {

    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    function navigateToAddUpdatePage () {
        navigate("/addUpdateDepartment")
    }

    function openDeleteModal () {
        setShowModal(!showModal);
    }
    return (
        <div className='departmentPageContainer PageContainer'>
            <h1>List Of Departments</h1>
            <div className='buttonContainer'>
            <button className='addButton' onClick={() => navigateToAddUpdatePage()}>
                    Add Department               
                </button>
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
                            Research & Development
                        </td>
                        <td className='tableValues'>
                            Play & Some Research
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
                            3
                        </th>
                        <td className='tableValues'>
                            IT
                        </td>
                        <td className='tableValues'>
                            Computer, Coffee and Cats
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
                </tbody>
            </table>
            {
              showModal ? <DeleteModal></DeleteModal> : <div></div>
            }     
        </div>
    )
}

export default DepartmentsPage;