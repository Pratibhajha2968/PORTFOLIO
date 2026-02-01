import "../Styles/Skills.css";

export default function Skills() {
  const skills = ["React","Node","MongoDB","Express","Java"];

  return (
    <section>
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((s,i) => <span key={i}>{s}</span>)}
      </div>
    </section>
  );
}
