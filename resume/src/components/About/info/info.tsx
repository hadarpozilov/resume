import "./info.css";

function Info(): JSX.Element {
  return (
    <div className="info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">highly motivated</h3>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase about__icon"></i>
        <h3 className="about__title"> interpersonal skills</h3>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Availability</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;
