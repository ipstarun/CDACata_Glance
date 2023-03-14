package com.cdac.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "courses")
public class Courses{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int courseId;
	
	@NotBlank(message = "Course name can't blank")
	@Column(nullable = false, unique = true,length = 20)
	private String courseName;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    
    private Set<Subjects> subjects = new HashSet<>();
    
  
    
    public Courses() {
		super();
	}

   // 
   public Courses(int courseId, @NotBlank(message = "Course name can't blank") String courseName,
			Set<Subjects> subjects) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.subjects = subjects;
	}



	public int getCourseId() {
		return courseId;
	}



	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}



	public void addSubject(Subjects subject) {
        subjects.add(subject);
        
    }


	
	public String getCourseName() {
		return courseName;
	}



	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}



	@JsonIgnore
	public Set<Subjects> getSubjects() {
		return subjects;
	}

	@JsonIgnore
	public void setSubjects(Set<Subjects> subjects) {
		this.subjects = subjects;
	}



	@Override
	public String toString() {
		return "Courses [courseId=" + courseId + ", courseName=" + courseName + ", subjects=" + subjects + "]";
	}

	
}
