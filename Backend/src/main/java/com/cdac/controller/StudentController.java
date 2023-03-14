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
import com.cdac.dto.LoginDTO;
import com.cdac.dto.ResponseDTO;
import com.cdac.dto.UserDTO;
import com.cdac.entity.Users;
import com.cdac.service.IMailService;
import com.cdac.service.IUserService;

@RestController
@RequestMapping("/student")
public class StudentController {

	
	@Autowired
	public IUserService userService;
	
	@Autowired
	private IMailService notificationService;
	
	// REST API to request handling method to register a new user
		@PostMapping("/register")
		public ResponseEntity<String> addStudentDetails(@RequestBody UserDTO userDTO) {
			//userDTO.setRole(Role.STUDENT);
			System.out.println("in add user details " + userDTO);
			userService.addUserDetails(userDTO);
			
			 // Send registration confirmation email
	        String to = userDTO.getEmail();
	        String subject = "Registration Confirmation";
	        String message = "Dear " + userDTO.getName() + " with id  " + userDTO.getId()+",\n\nThank you for registering on our website!";
	        notificationService.sendMail(to, subject, message);
	        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
		
		}
	
	
	  
		@PostMapping("/login")
		public ResponseDTO<?> authenticateStudent(@RequestBody LoginDTO request) {
			System.out.println("in auth " + request);
			Users user = userService.authenticateUser(request.getId(), request.getPassword());
			//Student student = studentService.authenticateStudent(request.getPrn(), request.getPassword());
			if (user != null)
				return new ResponseDTO<>(HttpStatus.OK, "success", user);
			else
				return new ResponseDTO<>(HttpStatus.UNAUTHORIZED, "error", "Invalid Credentials");
		
		}
	
	
		
		
	   @GetMapping("/{id}")
	 
	   public ResponseEntity<Users> getStudent(@PathVariable Long id) {
	        Users user = userService.getUserDetails(id);
	        return ResponseEntity.ok(user);
	    }
	 
 }
