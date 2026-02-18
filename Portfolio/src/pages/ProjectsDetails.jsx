import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = {
    "job-portal": {
      title: "Job Portal",
      description:
        "A Full-stack job portal where users can register, login, apply for jobs and recruiters can post jobs.",
      tech: "React, HTML/CSS , Javascript , Java , Springboot , MySQL , Git , Github , Vscode , Eclipse",
      features: [
        "User Authentication",
        "Job Posting",
        "Job Search",
        "Apply for jobs"
      ]
    },

    "crud-app": {
      title: "CRUD Operation",
      description:
        "A full stack CRUD application for managing users with add, update, delete and view features.",
      tech: "React, Spring Boot, MySQL",
      features: [
        "Add User",
        "Update User",
        "Delete User",
        "View All Users"
      ]
    },

    "portfolio": {
      title: "Portfolio",
      description:
        "My personal developer portfolio showcasing projects, skills and resume.",
      tech: "React, CSS",
      features: [
        "Responsive Design",
        "Project Showcase",
        "Contact Form"
      ]
    },

    "login-system": {
      title: "Login & Register System",
      description:
        "Authentication system with secure login and registration using JWT.",
      tech: "React, Node.js, MongoDB",
      features: [
        "JWT Authentication",
        "Password Encryption",
        "Protected Routes"
      ]
    }
  };

  const project = projects[id];

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <h3>Tech Stack</h3>
      <p>{project.tech}</p>

      <h3>Features</h3>
      <ul>
        {project.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
