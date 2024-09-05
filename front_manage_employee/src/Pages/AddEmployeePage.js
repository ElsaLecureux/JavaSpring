import { Form } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./AddEmployeePage.css";

const baseURL = 'http://localhost:8080/api/';

export async function action({request}) {
    const formData = await request.formData();
    console.log('inside action');
    try {
        const employee = await axios.post(
            `${baseURL}employees`,
            {
                "firstName": formData.get("firstName"),
                "lastName": formData.get("lastName"),
                "email": formData.get("email"),
                "departmentId": parseInt(formData.get("departmentId")),
            }
        );
        console.log(employee);
        return { employee };        
    } catch (error) {
        console.error(error);
    }
}

function AddEmployeePage () {   

    const [departments, setDepartments] = useState([]); 

    async function getDepartments() {
        try {
            const response = await axios.get(`${baseURL}departments`);
            setDepartments(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        getDepartments()
    }, []);
   
    return (
        <div className="PageContainer">
            <h1>
                Add an Employee
            </h1>
            <Form method="post" className="formEmployee">
                <label className="label formItem">
                    Employee First Name:
                    <input type="text" name="firstName" className="input"/>
                </label>
                <label className="label formItem">
                    Employee Last Name:
                    <input type="text" name="lastName" className="input">
                    </input>
                </label>
                <label className="label formItem">
                    Employee Email:
                    <input type="text" name="email" className="input">
                    </input>
                </label>
                <select name="departmentId" className="formItem select">
                    Employee Department:
                    <option value="">Choose a department</option>
                    {
                        departments.map((department)=> {
                            return (
                                <option key={department.id} type="text" value={department.id}> {department.departmentName} </option>
                            )
                        }
                       )
                    }
                </select>
                <button type="submit" className="submitButton" onClick={console.log('clicked')}>Submit</button>
            </Form>
        </div>
    )
}

export default AddEmployeePage;