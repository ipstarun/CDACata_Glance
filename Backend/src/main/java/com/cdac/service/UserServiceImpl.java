package com.cdac.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.dto.UserDTO;
import com.cdac.entity.Users;
import com.cdac.file.exception.UserNotFoundException;
import com.cdac.repository.UserRespository;



@Service
@Transactional // Optional :Add it --- if you want to keep tx open in the service layer
public class UserServiceImpl implements IUserService {


	@Autowired
	public UserRespository userRepos;
	
	@Override
	public List<UserDTO> getAllUser() {
		List<Users> dataList = userRepos.findAll();
		ArrayList<UserDTO> list = new ArrayList<>();
		
		for(Users entityStudent : dataList) {
			
			UserDTO objUserDTO = new UserDTO();
		
			BeanUtils.copyProperties(entityStudent, objUserDTO);
			
			list.add(objUserDTO);
		}
		return list;
		
	}

	@Override
	public Users addUserDetails(UserDTO userDTO) {
		Users user = new Users();
		
		BeanUtils.copyProperties(userDTO, user);
		System.out.println("add user src : " + userDTO);
		System.out.println(user);
	//	user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		return userRepos.save(user);
	}

	@Override
	public Users authenticateUser(long id, String password) {
		return userRepos.findByIdAndPassword(id, password);
	}

	@Override
	public Users updateUserDetails(Long id, UserDTO userDTO) {
		Object userDetails = userRepos.findById(id);
		System.out.println("user details"+userDetails);
		BeanUtils.copyProperties(userDTO, userDetails, "userName","password");
		System.out.println("updated details"+userDetails);
		return (Users) userDetails;
	}

//	@Override
//	public List<StudentDTO> findAllByRole(Role role) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	@Override
	public Users getUserDetails(long id) {
		
		return userRepos.findById(id);
	}


	@Override
	public List<UserDTO> findAllByRole(String role) {
		// TODO Auto-generated method stub
		List<Users> dataList= userRepos.findAllByRole(role);
	ArrayList<UserDTO> list = new ArrayList<>();
		
		for(Users entityUsers : dataList) {
			
			UserDTO objUserDTO = new UserDTO();
		
			BeanUtils.copyProperties(entityUsers, objUserDTO);
			
			list.add(objUserDTO);
		}
		return list;
	}

	@Override
	public Users getUserByEmail(String email) {
		return userRepos.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
	}

	@Override
	public boolean deleteUserDetails(Long id) {
		// TODO Auto-generated method stub
		 userRepos.deleteById(id);
		 return true;
	}

	

	
	
	
	
	
}
