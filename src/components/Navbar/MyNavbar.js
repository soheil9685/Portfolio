import "./MyNavbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import sign from "../../assets/images/Sign transparent.png"
import { Col, Row } from "react-bootstrap";

function MyNavbar() {

    const expand = "lg"

    return (
        <Navbar key={expand} expand={expand} className="mb-3">
            <Container>
                <Navbar.Brand href="#">
                    <img className="icon img-fluid" src={sign} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            <b className="roboto">Portfolio</b>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link className="roboto fs-5 mx-2" href="#Header">Home</Nav.Link>
                            <Nav.Link className="roboto fs-5 mx-2" href="#action2">Intro</Nav.Link>
                            <Nav.Link className="roboto fs-5 mx-2" href="#action2">Skills</Nav.Link>
                            <Nav.Link className="roboto fs-5 mx-2" href="#action2">Projects</Nav.Link>
                            <Nav.Link className="roboto fs-5 mx-2" href="#action2">Contact Me</Nav.Link>
                            <hr />
                            <div className="linkContainer d-lg-none">
                                <Row className="row-cols-6">
                                    <Col>
                                        <a className="media-link" href="https://github.com/soheil9685">
                                            <i class="bi bi-github fs-2"></i>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a className="media-link" href="https://www.instagram.com/_soheil9685_/">
                                            <i class="bi bi-instagram fs-2"></i>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a className="media-link" href="https://www.linkedin.com/in/mohammad-soheil-hosseini-6a3957333/">
                                            <i class="bi bi-linkedin fs-2"></i>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;