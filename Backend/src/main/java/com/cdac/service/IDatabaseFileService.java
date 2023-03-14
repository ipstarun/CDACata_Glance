package com.cdac.service;

import org.springframework.web.multipart.MultipartFile;

import com.cdac.entity.DatabaseFile;

public interface IDatabaseFileService {

	public DatabaseFile storeFile(MultipartFile file);
	public DatabaseFile getFile(String fileId);
	
	
	
}
