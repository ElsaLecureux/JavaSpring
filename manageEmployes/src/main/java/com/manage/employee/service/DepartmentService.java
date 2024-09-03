package com.manage.employee.service;

import com.manage.employee.dto.DepartmentDto;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface DepartmentService {

    DepartmentDto createDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentById(Long departmentId);

    List<DepartmentDto> getAllDepartments();

    DepartmentDto updateDepartment(Long departmentId, DepartmentDto departmentDto);

    HttpStatus deleteDepartment(Long departmentId);
}
