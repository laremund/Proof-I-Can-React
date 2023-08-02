import "./App.css";
import FAQ from "./FAQ";

function App() {
  return (
    <div className="resume">
      <div className="resume-container">
        <header className="headshot-name-header">
          <div className="headshot-container">
            <div className="headshot">Headshot</div>
          </div>
          <div className="name">Lars Remund</div>
        </header>
        <div className="info-sidebar">
          <div className="personal-intro">Personal Intro</div>
          <div className="contact-info">Contact Info</div>
        </div>
        <div className="accordion-section">
          <FAQ
            question="Skills"
            answer="123-456-7890 | lars@mail.com | 123 This Court, NY, NY 12345"
          />
          <FAQ className="accordion" question="Job Experience" />
          <FAQ className="accordion" question="Education" />
        </div>
        <div className="comment-section">Comments</div>
      </div>
    </div>
  );
}

export default App;
