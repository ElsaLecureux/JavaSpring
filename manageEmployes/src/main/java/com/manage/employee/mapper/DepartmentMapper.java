package com.manage.employee.mapper;

import com.manage.employee.dto.DepartmentDto;
import com.manage.employee.entity.Department;

public class DepartmentMapper {

    public static DepartmentDto mapToDepartmentDto(Department department)
    {
        return new DepartmentDto(
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }

    public static Department mapToDepartment(DepartmentDto departmentDto)
    {
        Department department = new Department();
        department.setId(departmentDto.getId());
        department.setDepartmentName(departmentDto.getDepartmentName());
        department.setDepartmentDescription(department.getDepartmentDescription());
        return department;
    }
}
