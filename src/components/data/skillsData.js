/** @format */
import skillsModel from "../model/skillsModel";
export default {
  skillsData: [
    new skillsModel(
      1,
      "Frontend Development",
      "Building responsive and interactive user interfaces.",
      ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Web Design"],
    ),

    new skillsModel(
      2,
      "Backend Development",
      "Developing server-side applications and APIs.",
      ["PHP", "Laravel", "RESTful APIs"],
    ),

    new skillsModel(
      3,
      "Database Management",
      "Designing and managing relational databases.",
      ["MySQL", "SQL Server", "Database Design & Optimization"],
    ),

    new skillsModel(
      4,
      "Programming Languages",
      "Experience with multiple programming languages.",
      ["PHP", "JavaScript", "Python", "C#"],
    ),

    new skillsModel(
      5,
      "Development Tools",
      "Tools used for development, testing, and deployment.",
      ["Visual Studio Code", "Visual Studio", "XAMPP", "Postman", "Docker"],
    ),

    new skillsModel(
      6,
      "Deployment & DevOps",
      "Deploying and maintaining web applications.",
      [
        "Web Application Deployment",
        "Server Configuration",
        "Docker",
        "Git & GitHub",
        "Basic CI/CD Workflows",
        "Application Maintenance & Monitoring",
      ],
    ),
  ],
  softSkills: [
    new skillsModel(
      1,
      "Teamwork",
      "Collaborating efficiently in team environments and contributing to shared goals.",
      [
        "Collaboration",
        "Conflict Resolution",
        "Cross-functional Teamwork",
        "Adaptability",
      ],
    ),

    new skillsModel(
      2,
      "Problem Solving",
      "Analyzing issues and developing practical solutions to complex challenges.",
      [
        "Critical Thinking",
        "Analytical Thinking",
        "Decision Making",
        "Troubleshooting",
      ],
    ),

    new skillsModel(
      3,
      "Time Management",
      "Managing tasks effectively while meeting deadlines and maintaining quality.",
      [
        "Task Prioritization",
        "Organization",
        "Multitasking",
        "Deadline Management",
      ],
    ),

    new skillsModel(
      4,
      "Professional Growth",
      "Committed to continuous learning and adapting to new technologies and challenges.",
      ["Self-Learning", "Growth Mindset", "Adaptability", "Leadership"],
    ),
  ],
};
