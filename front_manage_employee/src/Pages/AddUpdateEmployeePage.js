import { Form } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = 'http://localhost:8080/api/';

export async function action() {
    
    const formData = await request.formData();
    try {
        const response = await axios.post(
            `${baseURL}employees`,
            {
                firstName: formData.get("firstName"),
                lastName: formData.get("lastName"),
                email: formData.get("email"),
                departmentId: formData.get("departmentId"),
            }
        );
        console.log(response);
    } catch (error) {
        
    }
}

function AddUpdateEmployeePage () {   

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
            <Form>
                <label>
                    Employee First Name:
                    <input type="text" name="firstName">
                    </input>
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
                <input type="submit"></input>
            </Form>
        </div>
    )
}

export default AddUpdateEmployeePage;