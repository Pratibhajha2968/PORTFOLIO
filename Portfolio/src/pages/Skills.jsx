import React from 'react'

import "../Styles/Skills.css";

const skills = ["React", "Node", "MongoDB", "Express", "Java", "Spring"];

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

