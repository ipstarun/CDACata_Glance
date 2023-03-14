package com.cdac.service;

import java.util.List;
import java.util.Optional;

import com.cdac.dto.UserDTO;
import com.cdac.entity.Users;

public interface IUserService {

	List<UserDTO> getAllUser();
	Users addUserDetails(UserDTO user);
	
	public Users authenticateUser(long id,String password);
		
	public Users updateUserDetails(Long id,UserDTO userDTO);
	List<UserDTO> findAllByRole(String role);
	
	Users getUserDetails(long id);
    Users getUserByEmail(String email);
	//delete	
    public boolean deleteUserDetails(Long id);
	
	
	
	
	
	
	
}
