import React from 'react'
import "../Styles/Projects.css";

const Projects = () => {
  const data = [
    { title: "Job Portal", tech: "React + Spring Boot" },
    { title: "E-Commerce", tech: "MERN Stack" },
    { title: "Portfolio", tech: "React" },
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="grid">
        {data.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
