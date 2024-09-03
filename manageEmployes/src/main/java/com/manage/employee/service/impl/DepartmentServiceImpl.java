package com.manage.employee.service.impl;

import com.manage.employee.dto.DepartmentDto;
import com.manage.employee.entity.Department;
import com.manage.employee.exception.ResourceNotFoundException;
import com.manage.employee.mapper.DepartmentMapper;
import com.manage.employee.mapper.EmployeeMapper;
import com.manage.employee.repository.DepartmentRepository;
import com.manage.employee.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {
    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto)
    {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long departmentId)
    {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Department is not found with id" + departmentId));
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments()
    {
        List<Department> departmentList = departmentRepository.findAll();
        return DepartmentMapper.mapToDepartmentListDto(departmentList);
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto departmentDto)
    {
        Department departmentToUpdate = departmentRepository.findById(departmentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not found with id" + departmentId));
        departmentToUpdate.setDepartmentName(departmentDto.getDepartmentName());
        departmentToUpdate.setDepartmentDescription(departmentDto.getDepartmentDescription());
        departmentRepository.save(departmentToUpdate);

        return DepartmentMapper.mapToDepartmentDto(departmentToUpdate);
    }

    @Override
    public HttpStatus deleteDepartment(Long departmentId)
    {
        departmentRepository.findById(departmentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not found with id" + departmentId));
        departmentRepository.deleteById(departmentId);
        return HttpStatus.OK;
    }
}
