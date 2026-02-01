import React from 'react'
import "../Styles/Home.css";

const Home = () => {
  return (
     <section className="home">
      <h1>
        Hi, I'm <span>Pratibha Jha</span>
      </h1>
      <p>Java Full Stack Developer | MERN Stack</p>
      <br /><br /><br />
      <div className="cta">
        <a href="/projects">View Projects</a>
        <a href="/contact">Hire Me</a>
      </div>
    </section>
  )
}

export default Home
