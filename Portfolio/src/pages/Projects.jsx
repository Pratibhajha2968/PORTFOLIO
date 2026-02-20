import { useNavigate } from "react-router-dom";
import "../Styles/Projects.css";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    { id: "job-portal", title: "Job Portal" },
    { id: "crud-app", title: "CRUD Operation" },
    { id: "portfolio", title: "Portfolio Website" },
    { id: "auth-system", title: "Login & Register System" },
  ];

  return (
    <div className="page">
      <h1>My Projects</h1>

      <div className="grid">
        {projects.map((p) => (
          <div
            key={p.id}
            className="card"
            onClick={() => navigate(`/project/${p.id}`)}
          >
            {p.title}
          </div>
        ))}
      </div>
    </div>
  );
}
