package com.project.study_bright.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.study_bright.model.Exams;
import com.project.study_bright.requests.ExamRequest;
import com.project.study_bright.services.ExamService;

@RestController
@RequestMapping("/api/exams")
public class ExamController {

	@Autowired
    private ExamService examService;

    @PostMapping
    public ResponseEntity<Exams> createExam(@RequestBody ExamRequest request) {
        return new ResponseEntity<>(examService.createExam(request),HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Exams>> getExamsBySearch(@RequestParam(required = false) String search) {
        return new ResponseEntity<List<Exams>>(examService.getExamsBySearch(search),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteExam(@PathVariable Long id) {
        examService.deleteExam(id);
    }
}
