package com.manage.employee.controller;

import com.manage.employee.dto.EmployeeDto;
import com.manage.employee.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/employees")

public class EmployeeController {
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto)
    {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity getEmployee(@PathVariable("id") Long employeeId)
    {
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees()
    {
        List<EmployeeDto> employeeListDto = employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeListDto);
    }

    @PutMapping("api/updateEmployee/{id}")
    public ResponseEntity updateEmployee(@PathVariable("id") Long employeeId ,@RequestBody EmployeeDto employeeDto)
    {
        EmployeeDto updatedEmployeeDto = employeeService.updateEmployee(employeeId, employeeDto);
        return ResponseEntity.ok(updatedEmployeeDto);
    }

}
