import { NavLink } from "react-router-dom";
import { FooterContainer } from "./Footer.styled";


const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="footer-container">
          <ul>
            <li>
              {/* <NavLink to="/">Home</NavLink> */}
            </li>
            <li>Aditi Footerr</li>
            <li>Contact</li>
          </ul>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
