package com.project.study_bright.services;

import java.util.List;

import com.project.study_bright.model.Exams;
import com.project.study_bright.requests.ExamRequest;

public interface ExamService {
	Exams createExam(ExamRequest request);
    List<Exams> getExamsBySearch(String search);
    List<Exams> getAllExams();
    void deleteExam(Long id);
}
