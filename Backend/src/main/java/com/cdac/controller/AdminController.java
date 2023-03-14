package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.ResponseDTO;
import com.cdac.dto.SubjectRequest;
import com.cdac.dto.UserDTO;
import com.cdac.entity.Courses;
import com.cdac.entity.Users;
import com.cdac.repository.CourseRepository;
import com.cdac.repository.SubjectRepository;
import com.cdac.service.IMailService;
import com.cdac.service.IUserService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	public IUserService userService;
	
	@Autowired
	private IMailService notificationService;
	
	@Autowired
	CourseRepository courseRepository;
	
	@Autowired
	SubjectRepository subjectRepository;
	
	@PostMapping("/new-user")
	public ResponseEntity<String> addStudentDetails(@RequestBody UserDTO userDTO) {
	
		System.out.println("in add user details " + userDTO);
		userService.addUserDetails(userDTO);
		
		 // Send registration confirmation email
        String to = userDTO.getEmail();
        String subject = "Registration Confirmation";
        String message = "Dear " + userDTO.getName() + " with id  " + userDTO.getId()+",\n\nThank you for registering on our website!";
        notificationService.sendMail(to, subject, message);
        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
	
	}

	 @GetMapping("/allusers")
	 public List<UserDTO> getAllStudents(){
		   
		   return userService.getAllUser();  
		   }
	   
	   @PutMapping("/update-user/{id}")
	    public ResponseDTO<?> updateStudent(@PathVariable Long id, @RequestBody UserDTO userDTO) {
	        Users updatedStudent = userService.updateUserDetails(id, userDTO);
	        if (updatedStudent != null)
				return new ResponseDTO<>(HttpStatus.OK, "success", updatedStudent);
			else
				return new ResponseDTO<>(HttpStatus.UNAUTHORIZED, "error", "Invalid id");
	   }
		
	   @DeleteMapping("/delete-user/{id}")
	    public ResponseEntity<?> deleteStudent(@PathVariable Long id) {
		   userService.deleteUserDetails(id);
	        return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
	    }
	   
	   @PostMapping("/add-subject")
	   public Courses addSubject(@RequestBody SubjectRequest request) {
		   
		   return courseRepository.save(request.getCourses());	
	   }
	   
	   @GetMapping("/findAllSubject")
	   public List<Courses> findAllCourses(){
		   
		   return courseRepository.findAll();
	   }
	   
	}
