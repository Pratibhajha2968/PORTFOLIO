import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();

  const projectData = {
    "job-portal": {
      title: "Job Portal",
      desc: "Full stack job portal using Java Full-stack."
    },
    "crud-app": {
      title: "CRUD Operation",
      desc: "User management CRUD app using MERN stack."
    },
    "portfolio": {
      title: "Portfolio Website",
      desc: "Personal responsive portfolio built with React."
    },
    "auth-system": {
      title: "Login & Register System",
      desc: "Authentication system using JWT."
    }
  };

  const project = projectData[id];

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <div className="page">
      <h1>{project.title}</h1>
      <p>{project.desc}</p>
    </div>
  );
}
