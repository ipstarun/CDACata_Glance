package com.cdac.service;



import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.entity.DatabaseFile;
import com.cdac.file.exception.FileNotFoundException;
import com.cdac.file.exception.FileStorageException;
import com.cdac.repository.DatabaseFileRepository;



@Service
public class DatabaseFileServiceImpl implements IDatabaseFileService{

	@Autowired
	private DatabaseFileRepository dbFileRepository;
	
	
	@Override
	public DatabaseFile storeFile(MultipartFile file) {
		// Normalise File Name
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
	
		try {
			//check if file name contains invalid characters
			if(fileName.contains("..")) {
				throw new FileStorageException("Sorry! filename contains invalid path sequence " +fileName);
			}
			DatabaseFile dbFile = new DatabaseFile(fileName, file.getContentType(), file.getBytes());
			return dbFileRepository.save(dbFile);
		} catch (IOException e) {
			
			throw new FileStorageException("Could not store file " +fileName +"please try again");
		}
	}

	@Override
	public DatabaseFile getFile(String fileId) {
		
		return dbFileRepository.findById(fileId)
				.orElseThrow(() -> new FileNotFoundException("file not found with id " + fileId));
	}

}
