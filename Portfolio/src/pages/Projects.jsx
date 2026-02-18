import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Projects.css";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "job-portal",
      title: "Job Portal",
      shortDesc: "A full stack job portal application"
    },
    {
      id: "crud-app",
      title: "CRUD Operation",
      shortDesc: "Create, Read, Update, Delete operations"
    },
    {
      id: "portfolio",
      title: "Portfolio",
      shortDesc: "Personal portfolio website"
    },
    {
      id: "login-system",
      title: "Login And Register",
      shortDesc: "Authentication system with JWT"
    }
  ];

  return (
    <section>
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((p) => (
          <div
            key={p.id}
            className="card"
            onClick={() => navigate(`/project/${p.id}`)}
          >
            <h3>{p.title}</h3>
            <p>{p.shortDesc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


