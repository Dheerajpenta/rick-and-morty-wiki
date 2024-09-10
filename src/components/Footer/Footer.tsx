// libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// css imports
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      @2024 All Rights Reserved
      <div className="footer-author">
        <FontAwesomeIcon icon={faCode} /> by{" "}
        <span className="footer-author-name">Dheeraj Penta</span>
      </div>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/dheeraj-penta/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Dheerajpenta">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}
