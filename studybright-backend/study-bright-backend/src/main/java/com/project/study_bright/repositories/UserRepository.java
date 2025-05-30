package com.project.study_bright.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.study_bright.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	public User findByEmail(String email);
}
