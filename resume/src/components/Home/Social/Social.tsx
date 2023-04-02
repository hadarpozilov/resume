import "./Social.css";

function Social(): JSX.Element {
  return (
    <div className="Social">
      <a
        href="tel: +0556671701"
        className="social-icon"
        target="_blank"
      >
        <i className="bx bx-phone-call"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/hadar-pozilov/"
        className="social-icon"
        target="_blank"
      >
        <i className="bx bxl-linkedin"></i>
      </a>

     
    </div>
  );
}

export default Social;
