import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css"
import sign from "../../assets/images/Sign transparent.png"

function Footer() {
    return (
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1E3E62" fill-opacity="1" d="M0,256L80,229.3C160,203,320,149,480,160C640,171,800,245,960,256C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="container-fluid">
                <Container>
                    <Row>
                        <Col className="col-12 text-center">
                            <div className="linkContainer mt-4">
                                <a className="border-circle mx-2 fs-2" href="https://github.com/soheil9685">
                                    <i class="bi bi-github"></i>
                                </a>
                                <a className="border-circle mx-2 fs-2" href="https://www.instagram.com/_soheil9685_/">
                                    <i class="bi bi-instagram"></i>
                                </a>
                                <a className="border-circle mx-2 fs-2" href="https://www.linkedin.com/in/mohammad-soheil-hosseini-6a3957333/">
                                    <i class="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6 style={{ color: "#00B4D8" }} className="roboto text-center mt-3">
                                <i color="#00B4D8" class="bi bi-c-circle mx-2"></i>
                                Copyright Portfolio All Rights Reserved<br />
                                Designed by Soheil Hosseini
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;