package com.project.study_bright.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Question {
	 	@Id
	 	@GeneratedValue(strategy = GenerationType.AUTO)
	    private Long id;

	    @Column(columnDefinition = "TEXT")
	    private String text;

	    @ElementCollection
	    private List<String> options;

	    private int correctOption;

	    @Column(columnDefinition = "TEXT")
	    private String explanation;

	    private int marks;

	    @ManyToOne
	    @JoinColumn(name = "section_id")
	    private Section section;
	    
	    public Question() {
			// TODO Auto-generated constructor stub
		}

		public Question(Long id, String text, List<String> options, int correctOption, String explanation, int marks,
				Section section) {
			super();
			this.id = id;
			this.text = text;
			this.options = options;
			this.correctOption = correctOption;
			this.explanation = explanation;
			this.marks = marks;
			this.section = section;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getText() {
			return text;
		}

		public void setText(String text) {
			this.text = text;
		}

		public List<String> getOptions() {
			return options;
		}

		public void setOptions(List<String> options) {
			this.options = options;
		}

		public int getCorrectOption() {
			return correctOption;
		}

		public void setCorrectOption(int correctOption) {
			this.correctOption = correctOption;
		}

		public String getExplanation() {
			return explanation;
		}

		public void setExplanation(String explanation) {
			this.explanation = explanation;
		}

		public int getMarks() {
			return marks;
		}

		public void setMarks(int marks) {
			this.marks = marks;
		}

		public Section getSection() {
			return section;
		}

		public void setSection(Section section) {
			this.section = section;
		}
	    
	    
}
