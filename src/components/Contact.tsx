import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h2>
              I would be glad <br /> to connect!
            </h2>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/codewithbasant"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/basant-sharma-85866a177/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="mailto:sharma.basant961@gmail.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Gmail <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/917990084538"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Whatsapp <MdArrowOutward />
            </a>
            <a
              href="/BASANT_FSD_DEVELOPER.pdf"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Basant Sharma</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
