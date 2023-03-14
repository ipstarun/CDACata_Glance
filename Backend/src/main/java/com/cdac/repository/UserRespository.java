package com.cdac.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.cdac.entity.Users;


public interface UserRespository extends JpaRepository<Users, Long> {

    Users findByIdAndPassword(long id, String password);
	Users findById(long id);
	List<Users> findAllByRole(String role);
	Optional<Users> findByEmail(String email);
	
	
}
