import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css"
import sign from "../../assets/images/Sign transparent.png"

function Footer() {
    return (
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1E3E62" fill-opacity="1" d="M0,256L48,213.3C96,171,192,85,288,80C384,75,480,149,576,202.7C672,256,768,288,864,272C960,256,1056,192,1152,154.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="container-fluid">
                <Container>
                    <Row>
                        <Col>
                            <h5 style={{ color: "#FF6500" }} className="roboto">Portfolio.</h5>
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
                        <Col className="text-center">
                            <img className="w-50" src={sign} alt="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h6 style={{color: "#00B4D8"}} className="roboto text-center mt-3">
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