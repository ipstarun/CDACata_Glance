package com.cdac.entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "subjects")
public class Subjects  {
	
	@Id
	private int subjectId;
	
	@NotBlank(message = "Subject name can't be blank")
	@Column(nullable = false, unique = true,length = 20)
	private String name;
	
	  @ManyToOne(fetch = FetchType.LAZY)
	  @JoinColumn(name = "courseId")
      private Courses course;
	
	public Subjects() {
	
	}
	
	public Subjects(int subjectId, @NotBlank(message = "Subject name can't be blank") String name, Courses course) {
		super();
		this.subjectId = subjectId;
		this.name = name;
		this.course = course;
	}

    public int getSubjectId() {
		return subjectId;
	}

    public void setSubjectId(int subjectId) {
		this.subjectId = subjectId;
	}



	public Courses getCourse() {
		return course;
	}



	public void setCourse(Courses course) {
		this.course = course;
	}



	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}



	@Override
	public String toString() {
		return "Subjects [subjectId=" + subjectId + ", name=" + name + ", course=" + course + "]";
	}



	
		
}
