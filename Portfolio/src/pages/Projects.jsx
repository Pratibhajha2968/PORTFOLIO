import React from "react";
import "../Styles/Projects.css";

export default function Projects() {
  const data = ["Job Portal", "E-Commerce", "Portfolio"];

  return (
    <section>
      <h2>Projects</h2>
      <div className="grid">
        {data.map((p,i) => (
          <div className="card" key={i}>{p}</div>
        ))}
      </div>
    </section>
  );
}
