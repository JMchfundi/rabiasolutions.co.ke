import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-light text-dark py-2 border-bottom">
      <div className="container d-flex justify-content-between align-items-center small">

        {/* Contact Info */}
        <div>
          <span className="me-3">
            <i className="bi bi-envelope-fill"></i> info@rabiasolutions.com
          </span>
          <span>
            <i className="bi bi-telephone-fill"></i> +254 XXX XXX XXX
          </span>
        </div>

        {/* Social Icons */}
        <div>
          <a href="#" className="text-dark me-2"><FaFacebookF /></a>
          <a href="#" className="text-dark me-2"><FaTwitter /></a>
          <a href="#" className="text-dark me-2"><FaLinkedinIn /></a>
          <a href="#" className="text-dark"><FaInstagram /></a>
        </div>

      </div>
    </div>
  );
}

export default TopBar;