import './DepartmentsPage.css';
import {useNavigate } from "react-router-dom";
import DeleteModal from './DeleteModal';
import { useState, useEffect } from 'react';
import axios from 'axios';

function DepartmentsPage () {

    const baseURL = 'http://localhost:8080/api/departments';

    const [showModal, setShowModal] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [department, setDepartment] = useState(0);

    const navigate = useNavigate();

    function navigateToAddUpdatePage () {
        navigate("/addUpdateDepartment")
    }

    function openDeleteModal (id) {
        setDepartment(id);
        setShowModal(!showModal);
    }

    async function getDepartments() {
        try {
            const response = await axios.get(`${baseURL}`);
            setDepartments(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        getDepartments()
    }, []);

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
                    {
                        departments.map((department)=> {
                            return (
                                <tr key={department.id}>
                                    <th className='tableTitles'>
                                        {department.id}
                                    </th>
                                    <td className='tableValues'>
                                        {department.departmentName}
                                    </td>
                                    <td className='tableValues'>
                                        {department.departmentDescription}
                                    </td>
                                    <td className='tableValues actionsContainer'>
                                    <button className='actionButton updateButton' onClick={() => navigateToAddUpdatePage()}>
                                            Update
                                        </button>
                                        <button className='actionButton deleteButton' onClick={() => openDeleteModal(department)}>
                                            Delete
                                        </button>
                                    </td>
                                 </tr>  
                            );
                        })
                    }
                </tbody>
            </table>
            {
              showModal ? <DeleteModal entity={department} entities={departments} setEntities={setDepartments} setShowModal={setShowModal} label="departments"></DeleteModal> : <div></div>
            }     
        </div>
    )
}

export default DepartmentsPage;