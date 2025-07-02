import logo from "@/assets/logo.png";
import background from "@/assets/background.webp";
import { Card } from "react-bootstrap";
import { FaInfoCircle, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";

function Header() {
  return (
    <div className="container">
      <div>
        <img src={background} className="background" />
      </div>
      <div className="row align-items-end header">
        <div className="col-2 d-flex justify-content-center">
          <Card className="">
            <Card.Img src={logo} alt="logo" className="logo" variant="top" />
          </Card>
        </div>
        <div className="col-8 d-flex align-items-center">
          <h1 className="company__name">CalleLHambre</h1>
          <a href="" className="icon">
            <FaInfoCircle />
          </a>
          <a href="" className="icon">
            <FaShareNodes />
          </a>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <a href="" className="icon">
            <FaWhatsapp />
          </a>
          <a href="" className="icon">
            <FaInstagram />
          </a>
          <a href="" className="icon">
            <FaFacebook />
          </a>
          <a href="" className="icon">
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
