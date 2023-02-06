import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

import fileSvg from "../assets/img";

function Banner() {
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1); //Web

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col sx={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm TDH `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col sx={12} md={6} xl={5}>
            <img src={fileSvg.header} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
