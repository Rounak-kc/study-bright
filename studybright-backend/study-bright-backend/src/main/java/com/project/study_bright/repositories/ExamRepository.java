package com.project.study_bright.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.study_bright.model.Exams;


public interface ExamRepository extends JpaRepository<Exams, Long> {
	

}
