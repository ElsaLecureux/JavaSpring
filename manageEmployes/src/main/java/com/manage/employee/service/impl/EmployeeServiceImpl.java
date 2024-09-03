package com.manage.employee.service.impl;

import com.manage.employee.dto.EmployeeDto;
import com.manage.employee.entity.Employee;
import com.manage.employee.exception.ResourceNotFoundException;
import com.manage.employee.mapper.EmployeeMapper;
import com.manage.employee.repository.EmployeeRepository;
import com.manage.employee.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor

public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto)
    {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId)
    {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not found with id" + employeeId));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }
    
    @Override
    public List<EmployeeDto> getAllEmployees()
    {
            List<Employee> employeeList = employeeRepository.findAll();

        return EmployeeMapper.mapToEmployeeListDto(employeeList);
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto)
    {
        Employee employeeToUpdate = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not found with id" + employeeId));
        employeeToUpdate.setFirstName(employeeDto.getFirstName());
        employeeToUpdate.setLastName(employeeDto.getLastName());
        employeeToUpdate.setEmail(employeeDto.getEmail());
        employeeRepository.save(employeeToUpdate);

        return EmployeeMapper.mapToEmployeeDto(employeeToUpdate);
    }

    @Override
    public HttpStatus deleteEmployee(Long employeeId)
    {
        employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                new ResourceNotFoundException("Employee is not found with id" + employeeId));
        employeeRepository.deleteById(employeeId);
        return HttpStatus.OK;
    }
}
