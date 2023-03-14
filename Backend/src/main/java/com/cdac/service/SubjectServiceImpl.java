package com.cdac.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.dto.SubjectDTO;
import com.cdac.entity.Subjects;
import com.cdac.repository.SubjectRepository;



@Service
public class SubjectServiceImpl implements ISubjectService {
	
	@Autowired
	private SubjectRepository subjectRepo;
	
	
	
	
	public Subjects updateSubjectDetails(int subjectId,SubjectDTO subjectDTO) {
		Subjects subjectDetails = subjectRepo.findById(subjectId).get();
		System.out.println("subject details"+subjectDetails);
		BeanUtils.copyProperties(subjectDTO, subjectDetails);
		System.out.println("updated details"+subjectDetails);
		return subjectDetails;
	}


	

}
