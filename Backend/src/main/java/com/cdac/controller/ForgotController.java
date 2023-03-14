package com.cdac.controller;

import java.util.Random;

import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.UserDTO;
import com.cdac.entity.Users;
import com.cdac.repository.UserRespository;
import com.cdac.service.IMailService;
import com.cdac.service.IUserService;

@RestController
@RequestMapping("/user")
public class ForgotController {

	@Autowired
	private UserRespository userRespository;
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private IMailService mailService;
	
	@Autowired
	HttpSession session;
	

	@PostMapping("/send-otp")
	public ResponseEntity<String> sendOTP(@RequestParam("email") String email) {
		//UserDTO userDTO = new UserDTO();
		
		//generating otp of 4 digit
		 Random random = new Random();
		 int otp = 100000 + random.nextInt(900000);
	    
	    //code to send otp to registered email
	    String to = email;
        String subject = "Otp from Cdac-at-a-glance";
        String message ="Otp to reset your password is " + otp ;
        boolean flag = mailService.sendMail(to, subject, message);
       if(flag) {
    	   
    	   session.setAttribute("myotp", otp);
    	   session.setAttribute("email", email);
    	   return new ResponseEntity<>("Otp send successfully! ", HttpStatus.OK);
       }else {
    	   return new ResponseEntity<>("check your mail id again! ", HttpStatus.UNAUTHORIZED);
       }
      
		
	}
	
	@PostMapping("/verify-otp")
	public ResponseEntity<String> verifyOTP(@RequestParam("otp") int otp){
		
		int myOtp = (int) session.getAttribute("myotp");
		String email = (String) session.getAttribute("email");
		if(myOtp==otp) {
			
			Users user = userService.getUserByEmail(email); 
			if(user == null) {
				session.setAttribute("message", "User does not exits with this mail id !!");
			}else {
				session.setAttribute("message", "User exits with this mail id !!");
			}return new ResponseEntity<>("otp verified! ", HttpStatus.OK);
			
			}else {
			return new ResponseEntity<>("otp verification failed!", HttpStatus.UNAUTHORIZED);
		}
	}
	
	@PostMapping("/change-password")
	public ResponseEntity<String> changePassword(@RequestParam("newpassword") String newpassword){

		String email = (String)session.getAttribute("email");
		System.out.println("email stored in session is "+email);
       // Student student = studentRespository.findByEmail(email);
		Users user = userService.getUserByEmail(email);
		user.setPassword(newpassword);
		userRespository.save(user);
		
		return new ResponseEntity<>("Password changed successfully! ", HttpStatus.OK);
		
	}
	
	
}
