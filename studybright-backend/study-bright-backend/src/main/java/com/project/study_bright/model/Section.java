package com.project.study_bright.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Section {
	
	/*    sections: [
      { id: "s1", name: "General Intelligence & Reasoning", questionCount: 25 },
      { id: "s2", name: "General Awareness", questionCount: 25 },
      { id: "s3", name: "Quantitative Aptitude", questionCount: 25 },
      { id: "s4", name: "English Comprehension", questionCount: 25 },
    ],*/
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private int questionCount;
	
	@ManyToOne
	@JoinColumn(name="exam_id")
	@JsonIgnore
	private Exams exam;
	
	@OneToMany(mappedBy = "section", cascade = CascadeType.ALL)
    private List<Question> questions;
	
	public Section() {
		// TODO Auto-generated constructor stub
	}

	public Section(Long id, String name, int questionCount, Exams exam, List<Question> questions) {
		super();
		this.id = id;
		this.name = name;
		this.questionCount = questionCount;
		this.exam = exam;
		this.questions = questions;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuestionCount() {
		return questionCount;
	}

	public void setQuestionCount(int questionCount) {
		this.questionCount = questionCount;
	}

	public Exams getExam() {
		return exam;
	}

	public void setExam(Exams exam) {
		this.exam = exam;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}
	
	
}
