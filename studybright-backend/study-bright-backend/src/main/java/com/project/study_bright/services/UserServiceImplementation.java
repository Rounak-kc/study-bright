package com.project.study_bright.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.study_bright.configurations.JwtProvider;
import com.project.study_bright.exceptions.UserException;
import com.project.study_bright.model.User;
import com.project.study_bright.repositories.UserRepository;

@Service
public class UserServiceImplementation implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private JwtProvider jwtProvider;
	
	@Override
	public User findUserById(Long id) throws UserException {
		Optional<User> user=userRepository.findById(id);
		if(user.isPresent()) {
			return user.get();
		}throw new UserException("User Not Found With ID- "+id);
	}

	@Override
	public User findUserByJwt(String jwt) throws UserException {
		String email=jwtProvider.getEmailFromToken(jwt);
		User user=userRepository.findByEmail(email);
		if(user==null) {
			throw new UserException("User Not Found With Email- "+email);
		}
		return user;
	}

}

