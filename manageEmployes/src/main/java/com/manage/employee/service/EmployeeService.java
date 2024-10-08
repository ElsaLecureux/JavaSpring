package com.manage.employee.service;

import com.manage.employee.dto.EmployeeDto;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(Long employeeId);
    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto);

    HttpStatus deleteEmployee(Long employeeId);
}
