package com.cdac.repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.cdac.entity.Subjects;



public interface SubjectRepository extends JpaRepository<Subjects, Integer> {
		
	
       // List<Subjects> getAllSubjects();
		Optional<Subjects> findByName(String name);
		 List<Subjects> findBySubjectId(int subjectId);
		


}
