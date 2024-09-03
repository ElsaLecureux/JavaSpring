package com.manage.employee.mapper;

import com.manage.employee.dto.DepartmentDto;
import com.manage.employee.dto.EmployeeDto;
import com.manage.employee.entity.Department;
import com.manage.employee.entity.Employee;

import java.util.ArrayList;
import java.util.List;

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
        department.setDepartmentDescription(departmentDto.getDepartmentDescription());
        return department;
    }

    public static List<DepartmentDto> mapToDepartmentListDto(List<Department> departmentList)
    {
        List<DepartmentDto> DepartmentListDto = new ArrayList();
        for (Department department: departmentList
        ) {
            DepartmentListDto.add(mapToDepartmentDto(department));
        }
        return DepartmentListDto;
    }
}
