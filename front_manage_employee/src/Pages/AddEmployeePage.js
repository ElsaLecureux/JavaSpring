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
            <Form method="post">
                <label>
                    Employee First Name:
                    <input type="text" name="firstName" />
                </label>
                <label>
                    Employee Last Name:
                    <input type="text" name="lastName">
                    </input>
                </label>
                <label>
                    Employee Email:
                    <input type="text" name="email">
                    </input>
                </label>
                <select name="departmentId">
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
                <button type="submit" onClick={console.log('clicked')}>Submit</button>
            </Form>
        </div>
    )
}

export default AddEmployeePage;