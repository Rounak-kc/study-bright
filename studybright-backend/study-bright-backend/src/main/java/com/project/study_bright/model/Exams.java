package com.project.study_bright.model;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Exams {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String title;
	
	private String discription;
	
	private String examType;
	
	private int duration;
	
	private int totalQuestions;
	
	private int maxMarks;
	
	private double negativeMarking;
	
	private boolean isPremium;
	
	@OneToMany(mappedBy = "exam",cascade = CascadeType.ALL)
	private List<Section> sections;
	
	@OneToMany(mappedBy = "exam", cascade = CascadeType.ALL)
    private List<TestResult> testResults;
	
	public Exams() {
		// TODO Auto-generated constructor stub
	}

	public Exams(Long id, String title, String discription, String examType, int duration, int totalQuestions,
			int maxMarks, double negativeMarking, boolean isPremium, List<Section> sections,
			List<TestResult> testResults) {
		super();
		this.id = id;
		this.title = title;
		this.discription = discription;
		this.examType = examType;
		this.duration = duration;
		this.totalQuestions = totalQuestions;
		this.maxMarks = maxMarks;
		this.negativeMarking = negativeMarking;
		this.isPremium = isPremium;
		this.sections = sections;
		this.testResults = testResults;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDiscription() {
		return discription;
	}

	public void setDiscription(String discription) {
		this.discription = discription;
	}

	public String getExamType() {
		return examType;
	}

	public void setExamType(String examType) {
		this.examType = examType;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public int getTotalQuestions() {
		return totalQuestions;
	}

	public void setTotalQuestions(int totalQuestions) {
		this.totalQuestions = totalQuestions;
	}

	public int getMaxMarks() {
		return maxMarks;
	}

	public void setMaxMarks(int maxMarks) {
		this.maxMarks = maxMarks;
	}

	public double getNegativeMarking() {
		return negativeMarking;
	}

	public void setNegativeMarking(double negativeMarking) {
		this.negativeMarking = negativeMarking;
	}

	public boolean isPremium() {
		return isPremium;
	}

	public void setPremium(boolean isPremium) {
		this.isPremium = isPremium;
	}

	public List<Section> getSections() {
		return sections;
	}

	public void setSections(List<Section> sections) {
		this.sections = sections;
	}

	public List<TestResult> getTestResults() {
		return testResults;
	}

	public void setTestResults(List<TestResult> testResults) {
		this.testResults = testResults;
	}

}
