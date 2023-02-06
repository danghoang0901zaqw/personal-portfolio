import { Col,Row,Tab,Container,Nav } from "react-bootstrap";
import fileSvg from "../assets/img";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: fileSvg.project1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: fileSvg.project2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: fileSvg.project3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: fileSvg.project1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: fileSvg.project2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: fileSvg.project3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                         {...project}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={fileSvg.colorSharp2} alt="" />
    </section>
  );
}

export default Projects;
