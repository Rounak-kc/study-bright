package com.project.study_bright.requests;

public class ExamRequest {
    private String title;
    private String examType;
    private String description;
    private int duration;
    private int totalQuestions;
    private int maxMarks;
    private double negativeMarking;
    private boolean isPremium;
    
    public ExamRequest() {
		// TODO Auto-generated constructor stub
	}

	public ExamRequest(String title, String examType, String description, int duration, int totalQuestions,
			int maxMarks, double negativeMarking, boolean isPremium) {
		super();
		this.title = title;
		this.examType = examType;
		this.description = description;
		this.duration = duration;
		this.totalQuestions = totalQuestions;
		this.maxMarks = maxMarks;
		this.negativeMarking = negativeMarking;
		this.isPremium = isPremium;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getExamType() {
		return examType;
	}

	public void setExamType(String examType) {
		this.examType = examType;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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
    
    
}
