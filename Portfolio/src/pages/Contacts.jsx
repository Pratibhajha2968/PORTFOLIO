import "../Styles/Contacts.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="form">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="GitHub Link" />
        <input placeholder="LinkedIn Link" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}
