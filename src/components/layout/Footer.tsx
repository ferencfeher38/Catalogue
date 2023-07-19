import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/layout/Footer.scss";

export const Footer = function () {
  return (
    <div className="footer-container">
      <div className="footer-card">
        <div className="title">Contact</div>
        <div className="text">John Doe | Assistant</div>
        <div className="text">+36 30 123 4567, john.doe@marso.hu</div>
      </div>
      <div className="footer-card">
        <div className="title">HQ Contact</div>
        <div className="text">John Doe | Assistant</div>
        <div className="text">+36 30 123 4567, john.doe@marso.hu</div>
      </div>
      <div className="footer-card">
        <div className="title">Social Media</div>
        <div className="icon-wrapper">
          <FontAwesomeIcon
            icon={faFacebookF}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
          <FontAwesomeIcon
            icon={faYoutube}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </div>
      </div>
    </div>
  );
};
