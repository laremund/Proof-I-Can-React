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
          <div className="body-text">
            Aspiring front-end web developer with experience with front-end
            languages and frameworks. Currently employed as a Software Dev
            intern.
          </div>
          <div className="subheader">Contact Info</div>
          <div className="body-text">
            <div className="info-box">larsgremund@gmail.com</div>
            <div className="info-box">{`(636) 634-1260`}</div>
            <div className="info-box">
              1270 N 580 E, Pleasant Grove, UT 84602
            </div>
          </div>
        </div>
        <div className="accordion-section-container">
          <div className="accordion-section">
            <FAQ question="Skills" />
            <FAQ className="accordion" question="Job Experience" />
            <FAQ
              className="accordion"
              question="Education"
              answer={
                <>
                  <div className="info-box">
                    <div>Utah State University</div>
                    <div>Jan 2022 - Present</div>
                  </div>
                  <div className="info-box">
                    <div>Brigham Young University</div>
                    <div>Aug 2020 - May 2021</div>
                  </div>
                </>
              }
            />
          </div>
        </div>
        <div className="comment-section">Comments</div>
      </div>
    </div>
  );
}

export default App;
