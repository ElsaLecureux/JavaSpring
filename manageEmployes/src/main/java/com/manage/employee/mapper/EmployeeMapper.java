package com.manage.employee.mapper;

import com.manage.employee.dto.DepartmentDto;
import com.manage.employee.dto.EmployeeDto;
import com.manage.employee.entity.Employee;

import java.util.ArrayList;
import java.util.List;

public class EmployeeMapper {

    private static DepartmentDto departmentDto = new DepartmentDto();
    public static EmployeeDto mapToEmployeeDto(Employee employee)
    {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getDepartment().getId()
        );
    }
    public static Employee mapToEmployee(EmployeeDto employeeDto)
    {
        Employee employee = new Employee();
        employee.setId(employee.getId());
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        employee.getDepartment().setId(departmentDto.getId());;
        return employee;
    }

    public static List<EmployeeDto> mapToEmployeeListDto(List<Employee> employeeList)
    {
        List<EmployeeDto> employeeListDto = new ArrayList();
        for (Employee employee: employeeList
             ) {
            employeeListDto.add(mapToEmployeeDto(employee));
        }
        return employeeListDto;
    }
}
