import { Container, Row, Col } from "react-bootstrap";
import fileSvg from "../assets/img";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={fileSvg.logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end ">
            <div className="social-icon">
              <a href="">
                <img src={fileSvg.navIcon1} alt="" />
              </a>
              <a href="">
                <img src={fileSvg.navIcon2} alt="" />
              </a>
              <a href="">
                <img src={fileSvg.navIcon3} alt="" />
              </a>
            </div>
            <p>Coppyright 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
