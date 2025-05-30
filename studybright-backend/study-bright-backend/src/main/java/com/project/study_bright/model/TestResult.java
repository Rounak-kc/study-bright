package com.project.study_bright.model;

import java.time.ZonedDateTime;
import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class TestResult {

	 	@Id
	 	@GeneratedValue(strategy = GenerationType.AUTO)
	    private Long id;
	    private int score;
	    private int maxScore;
	    private int timeTaken;
	    private int correctAnswers;
	    private int incorrectAnswers;
	    private int unattempted;

	    @ManyToOne
	    @JoinColumn(name = "exam_id")
	    private Exams exam;

	    @ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;

	    @ElementCollection
	    private List<String> answers;

	    private ZonedDateTime completedAt;
	    
	    public TestResult() {
			// TODO Auto-generated constructor stub
		}

		public TestResult(Long id, int score, int maxScore, int timeTaken, int correctAnswers, int incorrectAnswers,
				int unattempted, Exams exam, User user, List<String> answers, ZonedDateTime completedAt) {
			super();
			this.id = id;
			this.score = score;
			this.maxScore = maxScore;
			this.timeTaken = timeTaken;
			this.correctAnswers = correctAnswers;
			this.incorrectAnswers = incorrectAnswers;
			this.unattempted = unattempted;
			this.exam = exam;
			this.user = user;
			this.answers = answers;
			this.completedAt = completedAt;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public int getScore() {
			return score;
		}

		public void setScore(int score) {
			this.score = score;
		}

		public int getMaxScore() {
			return maxScore;
		}

		public void setMaxScore(int maxScore) {
			this.maxScore = maxScore;
		}

		public int getTimeTaken() {
			return timeTaken;
		}

		public void setTimeTaken(int timeTaken) {
			this.timeTaken = timeTaken;
		}

		public int getCorrectAnswers() {
			return correctAnswers;
		}

		public void setCorrectAnswers(int correctAnswers) {
			this.correctAnswers = correctAnswers;
		}

		public int getIncorrectAnswers() {
			return incorrectAnswers;
		}

		public void setIncorrectAnswers(int incorrectAnswers) {
			this.incorrectAnswers = incorrectAnswers;
		}

		public int getUnattempted() {
			return unattempted;
		}

		public void setUnattempted(int unattempted) {
			this.unattempted = unattempted;
		}

		public Exams getExam() {
			return exam;
		}

		public void setExam(Exams exam) {
			this.exam = exam;
		}

		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}

		public List<String> getAnswers() {
			return answers;
		}

		public void setAnswers(List<String> answers) {
			this.answers = answers;
		}

		public ZonedDateTime getCompletedAt() {
			return completedAt;
		}

		public void setCompletedAt(ZonedDateTime completedAt) {
			this.completedAt = completedAt;
		}
	    
	    

}
