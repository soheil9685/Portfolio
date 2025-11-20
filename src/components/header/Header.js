import { Button, Col, Container, Row } from "react-bootstrap";
import "./Header.css"
import HeaderImg from "../../assets/images/HeaderImg.webp"
import { Typewriter } from 'react-simple-typewriter'

function Header() {
    return (
        <Container className="mt-5" id="Header">
            <Row className="">
                <Col className="col-12 col-lg-6 text-center">
                    <img data-aos="fade-up" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="img-fluid rounded w-50 mx-5" src={HeaderImg} alt="" />
                </Col>
                <Col className="col-lg-6">
                    <h1 data-aos="fade-down" style={{ marginBottom: "0px" }} className="tungsten introduce mt-5">Hi! I'm
                        <span className="name">
                            <Typewriter cursor={true} cursorBlinking={true} loop={1} words={[" Soheil Hosseini"]} />
                        </span>
                    </h1>
                    <h2 data-aos="fade-up" className="roboto">I'm a <span style={{ backgroundColor: "#1E2022", color: "#C9D6DF" }} className="fw-bold underline text-decoration-underline p-2 rounded"><Typewriter cursor={true} cursorBlinking={true} loop={0} words={["Front-end developer"]} /></span></h2>
                    <div data-aos="fade-up" className="contactMeContainer mt-5">
                        <Button style={{ borderRadius: "30px", backgroundColor: "#1E2022" }} className="roboto border-0 fs-5">
                            <a style={{all: "unset"}} href="#ContactMe">Contact Me</a>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;