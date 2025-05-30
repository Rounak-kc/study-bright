package com.project.study_bright.services;

import com.project.study_bright.exceptions.UserException;
import com.project.study_bright.model.User;

public interface UserService {

	public User findUserById(Long userId)throws UserException;
	
	public User findUserByJwt(String jwt)throws UserException;
}
