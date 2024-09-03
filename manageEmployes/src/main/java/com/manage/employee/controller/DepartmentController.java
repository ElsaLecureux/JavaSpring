package com.manage.employee.controller;

import com.manage.employee.dto.DepartmentDto;
import com.manage.employee.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/departments")
public class DepartmentController {

    private DepartmentService departmentService;

    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto)
    {
        DepartmentDto savedDepartment = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity getDepartment(@PathVariable("id") Long departmentId)
    {
        DepartmentDto departmentDto = departmentService.getDepartmentById(departmentId);
        return ResponseEntity.ok(departmentDto);
    }

    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartment()
    {
        List<DepartmentDto> departmentListDto = departmentService.getAllDepartments();
        return ResponseEntity.ok(departmentListDto);
    }

    @PutMapping("{id}")
    public ResponseEntity updateDepartment(@PathVariable("id") Long departmentId, @RequestBody DepartmentDto departmentDto)
    {
        DepartmentDto updateDepartmentDto = departmentService.updateDepartment(departmentId, departmentDto);
        return ResponseEntity.ok(updateDepartmentDto);
    }

    @DeleteMapping("{id}")
    public HttpStatus deleteDepartment(@PathVariable("id") Long departmentId)
    {
        return departmentService.deleteDepartment(departmentId);
    }
}
