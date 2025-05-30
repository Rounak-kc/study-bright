# 📚 Study Bright - Database Schema

This project contains the database structure for the **Study Bright** platform, including user management, exams, questions, and results.

---

## 📘 Database Schema: `study_bright`

### 🧑 Table: `user`

| Column     | Type         | Description         |
|------------|--------------|---------------------|
| id         | bigint       | Primary Key         |
| create_at  | datetime     | Creation timestamp  |
| email      | varchar(255) | User email          |
| mobile     | varchar(255) | Mobile number       |
| name       | varchar(255) | Full name           |
| password   | varchar(255) | Hashed password     |
| role       | varchar(255) | User role (admin/student/etc.) |

---

### 🏠 Table: `address`

| Column         | Type         | Description         |
|----------------|--------------|---------------------|
| id             | bigint       | Primary Key         |
| city           | varchar(255) | City                |
| first_name     | varchar(255) | First name          |
| last           | varchar(255) | Last name           |
| mobile         | varchar(255) | Mobile number       |
| state          | varchar(255) | State               |
| street_address | varchar(255) | Street address      |
| zip_code       | varchar(255) | Zip code            |
| user_id        | bigint       | FK → user(id)       |

---

### 📝 Table: `exams`

| Column            | Type         | Description          |
|-------------------|--------------|----------------------|
| id                | bigint       | Primary Key          |
| discription       | varchar(255) | Description          |
| duration          | int          | Duration in minutes  |
| exam_type         | varchar(255) | Type of exam         |
| is_premium        | bit(1)       | Premium or not       |
| max_marks         | int          | Total marks          |
| negative_marking  | double       | Negative marking     |
| title             | varchar(255) | Exam title           |
| total_questions   | int          | Total question count |

---

### 📚 Table: `section`

| Column         | Type         | Description             |
|----------------|--------------|-------------------------|
| id             | bigint       | Primary Key             |
| name           | varchar(255) | Section name            |
| question_count | int          | Number of questions     |
| exam_id        | bigint       | FK → exams(id)          |

---

### ❓ Table: `question`

| Column         | Type     | Description               |
|----------------|----------|---------------------------|
| id             | bigint   | Primary Key               |
| correct_option | int      | Index of correct option   |
| explanation    | text     | Explanation               |
| marks          | int      | Marks for the question    |
| text           | text     | Question text             |
| section_id     | bigint   | FK → section(id)          |

---

### 🔢 Table: `question_options`

| Column      | Type         | Description         |
|-------------|--------------|---------------------|
| question_id | bigint       | FK → question(id)   |
| options     | varchar(255) | Option text         |

---

### 🧪 Table: `test_result`

| Column            | Type         | Description               |
|-------------------|--------------|---------------------------|
| id                | bigint       | Primary Key               |
| completed_at      | datetime     | Completion timestamp      |
| correct_answers   | int          | Number of correct answers |
| incorrect_answers | int          | Number of incorrect answers |
| max_score         | int          | Max possible score        |
| score             | int          | Score obtained            |
| time_taken        | int          | Time taken in seconds     |
| unattempted       | int          | Unanswered questions      |
| exam_id           | bigint       | FK → exams(id)            |
| user_id           | bigint       | FK → user(id)             |

---

### 📋 Table: `test_result_answers`

| Column         | Type         | Description              |
|----------------|--------------|--------------------------|
| test_result_id | bigint       | FK → test_result(id)     |
| answers        | varchar(255) | User's selected answers  |

---

### 🔁 Sequences Tables

Each of these tables manages auto-increment values:

- `user_seq`
- `address_seq`
- `exams_seq`
- `question_seq`
- `section_seq`
- `test_result_seq`

> Each sequence table contains:
```text
next_val: bigint
