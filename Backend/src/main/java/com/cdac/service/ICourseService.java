package com.cdac.service;

import com.cdac.dto.CourseDTO;
import com.cdac.entity.Courses;

public interface ICourseService {
	
	public Courses updateCourseDetails(int courseId,CourseDTO courses);
    public boolean deleteCourse(int courseId);
	
}
