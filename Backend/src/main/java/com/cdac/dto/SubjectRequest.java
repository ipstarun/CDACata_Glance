package com.cdac.dto;

import com.cdac.entity.Courses;

public class SubjectRequest {

	private Courses courses;

	public SubjectRequest() {
		super();
	}

	public SubjectRequest(Courses courses) {
		super();
		this.courses = courses;
	}

	public Courses getCourses() {
		return courses;
	}

	public void setCourses(Courses courses) {
		this.courses = courses;
	}
	

	@Override
	public String toString() {
		return "SubjectRequest [courses=" + courses + "]";
	}
	
}
