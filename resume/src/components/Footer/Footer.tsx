import "./Footer.css";

function Footer(): JSX.Element {
  return (
    <div className="Footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hadar</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/hadarpozilov"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/hadar-pozilov/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.facebook.com/hadar.pozilov/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Hadar 2023</span>
      </div>
    </div>
  );
}

export default Footer;
