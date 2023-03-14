package com.cdac.controller;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.cdac.dto.LoginDTO;
import com.cdac.dto.ResponseDTO;
import com.cdac.entity.DatabaseFile;
import com.cdac.entity.Users;
import com.cdac.file.payload.FileResponse;
import com.cdac.repository.UserRespository;
import com.cdac.service.IDatabaseFileService;
import com.cdac.service.IMailService;
import com.cdac.service.IUserService;


@RestController
@RequestMapping("/faculty")
public class FileUploadController {
	@Autowired
	private IDatabaseFileService fileStorageService;
	

	@Autowired
	private IUserService userService;
	
	
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

	
	
	
	@PostMapping("/uploadFile")
	public FileResponse uploadFile(@RequestParam("file") MultipartFile file) {
		
		DatabaseFile fileName = fileStorageService.storeFile(file);
		
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
				 .path("/downloadFile")
				 .path(fileName.getFileName())
				 .toUriString();
		
		return new FileResponse(fileName.getFileName(),fileDownloadUri,file.getContentType(),file.getSize());
	}
	
	@PostMapping("/uploadMultipleFiles")
	public List<FileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files){
		
		return Arrays.asList(files)
				.stream()
				.map(file -> uploadFile(file))
				.collect(Collectors.toList());
		
	}
	
	/*@PostMapping("/uploadMultipleFiles")
	public List<FileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files){
		
		return Arrays.asList(files)
				.stream()
				.map(file -> uploadFile(file))
				.collect(Collectors.toList());
		
	}*/
	
	@PostMapping("/getFiles/{id}")
	public DatabaseFile getFileById(@PathVariable("id") String id) {
		return fileStorageService.getFile(id);
	}
	
}
