package com.manage.employee.service.impl;

import com.manage.employee.dto.DepartmentDto;
import com.manage.employee.entity.Department;
import com.manage.employee.mapper.DepartmentMapper;
import com.manage.employee.repository.DepartmentRepository;
import com.manage.employee.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl {
    private DepartmentRepository departmentRepository;

    public DepartmentDto createDepartment(DepartmentDto departmentDto)
    {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }
}
