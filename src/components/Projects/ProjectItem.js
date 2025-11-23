import { Col, Container, Row } from "react-bootstrap"
import "./ProjectItem.css"
import { Typewriter } from 'react-simple-typewriter'


function ProjectItem() {
    return (
        <Container id="Project" className="mt-5">
            <h1 data-aos="zoom-in" className="roboto text-center">Projects</h1>
            <div data-aos="zoom-in" style={{width: "50px", height: "3px", backgroundColor: "#000", margin: "auto", borderRadius: "10px"}}></div>
            <Row>
                <Col>
                    <h3 className="mt-2 text-center d-flex align-items-center justify-content-center">
                        <span class="loader"></span>
                        Uploading Soon
                        <Typewriter cursor={true} cursorBlinking={true} loop={0} words={["..."]} />
                    </h3>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectItem;