package com.cdac.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cdac.entity.Courses;
import com.cdac.entity.Subjects;



public interface CourseRepository extends JpaRepository<Courses, Integer> {


	List<Subjects> findByCourseId(Long courseId);
	
	
	
}
