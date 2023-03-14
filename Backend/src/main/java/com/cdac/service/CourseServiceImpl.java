package com.cdac.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.dto.CourseDTO;
import com.cdac.entity.Courses;
import com.cdac.repository.CourseRepository;


@Service
public class CourseServiceImpl implements ICourseService {
	
	@Autowired
	private CourseRepository courseRepository;
	

    @Override
	public Courses updateCourseDetails(int coursesId, CourseDTO courses) {
		Courses courseDetails = courseRepository.findById(coursesId).get();
		System.out.println("course details"+courseDetails);
		BeanUtils.copyProperties(courses, courseDetails);
		System.out.println("updated details"+courseDetails);
		return courseDetails;
	}


	@Override
	public boolean deleteCourse(int courseId) {
		
		 courseRepository.deleteById(courseId);
		 return true;
	}

}

