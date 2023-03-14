package com.cdac.service;

import com.cdac.dto.SubjectDTO;
import com.cdac.entity.Subjects;

public interface ISubjectService {
	
	public Subjects updateSubjectDetails(int subjectId,SubjectDTO subjects);
  
	
}
