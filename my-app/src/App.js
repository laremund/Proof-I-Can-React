import "./App.css";
import FAQ from "./FAQ";
import reactLogo from "./react-logo.png";
import jsLogo from "./js-logo.png";
import pythonLogo from "./python-logo.png";
import htmlLogo from "./html-logo.png";
import cssLogo from "./css-logo.png";

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
            <div className="contact-box">larsgremund@gmail.com</div>
            <div className="contact-box">{`(636) 634-1260`}</div>
            <div className="contact-box">
              1270 N 580 E, Pleasant Grove, UT 84602
            </div>
          </div>
        </div>
        <div className="accordion-section-container">
          <div className="accordion-section">
            <FAQ
              question="Skills"
              answer={
                <div className="accordion-details">
                  <div className="info-box">
                    <img src={reactLogo} className="logo" />
                  </div>
                  <div className="info-box">
                    <img src={jsLogo} className="logo" />
                  </div>
                  <div className="info-box">
                    <img src={pythonLogo} className="logo" />
                  </div>
                  <div className="info-box">
                    <img src={htmlLogo} className="logo" />
                  </div>
                  <div className="info-box">
                    <img src={cssLogo} className="logo" />
                  </div>
                </div>
              }
            />
            <FAQ className="accordion" question="Job Experience" />
            <FAQ
              className="accordion"
              question="Education"
              answer={
                <>
                  <div className="contact-box">
                    <div>Utah State University</div>
                    <div>Jan 2022 - Present</div>
                  </div>
                  <div className="contact-box">
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
