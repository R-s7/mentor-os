# MentorOS Architecture

## 1. Overview

MentorOS is an AI-powered personal mentor, learning management system,
career tracker, and living developer portfolio.

The system consists of five major layers:

1. Frontend
2. Backend
3. Database
4. AI Engine
5. External Integrations

---

## 2. High-Level Architecture

User
  ↓
Next.js Frontend
  ↓
FastAPI Backend
  ↓
Application Services
  ↓
PostgreSQL

The AI Engine interacts with backend services through controlled tools.

External platforms such as GitHub, LinkedIn, LeetCode, Codeforces,
and job platforms are accessed through dedicated integration services.

---

## 3. Frontend

Technology:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

Responsibilities:

- User interface
- Dashboard
- Goal management
- Task management
- Progress visualization
- AI mentor chat
- Learning tests
- Portfolio pages
- Social activity
- Job tracking

---

## 4. Backend

Technology:

- Python
- FastAPI
- SQLAlchemy
- Pydantic

Responsibilities:

- REST APIs
- Authentication
- Business logic
- Goal management
- Task management
- Progress tracking
- Learning plans
- Test evaluation
- AI tool execution
- External integrations

---

## 5. Database

Primary database:

PostgreSQL

Core entities:

- User
- Goal
- Milestone
- Task
- Skill
- LearningSession
- Test
- Question
- Answer
- ProgressLog
- Project
- SocialAccount
- SocialActivity
- JobApplication
- Conversation
- Memory

---

## 6. AI Engine

The AI system will eventually support:

- Personal mentoring
- Goal planning
- Learning roadmap generation
- Task generation
- Progress analysis
- Knowledge testing
- Adaptive learning
- Memory
- Career guidance

The AI will interact with the application through tools rather than
direct database manipulation.

Examples:

- get_user_profile()
- get_active_goals()
- create_goal()
- create_milestone()
- create_task()
- complete_task()
- get_progress()
- create_learning_plan()
- generate_test()
- evaluate_test()
- save_memory()
- search_memory()

---

## 7. External Integrations

Potential integrations:

- GitHub
- LinkedIn
- LeetCode
- Codeforces
- Instagram
- Job application sources

Each integration should be isolated behind its own service.

The system should prefer official APIs and OAuth where available.

---

## 8. Design Principles

### Separation of concerns

Each component should have a clearly defined responsibility.

### AI does not directly control the database

The AI requests actions through controlled backend tools.

### Evidence-based skill tracking

Skills should be evaluated using learning activity, assessments,
projects, and other measurable evidence.

### Security

Secrets must never be committed to Git.

Authentication credentials and API tokens must be stored securely.

### Extensibility

New integrations and AI capabilities should be addable without
rewriting the entire application.