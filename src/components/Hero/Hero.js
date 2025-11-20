import { Col, Container, Row } from "react-bootstrap"
import "./Hero.css"
import { Typewriter } from 'react-simple-typewriter'
import HeroImg from "../../assets/images/HeroImg.jpg"


function Hero() {
    return (
        <Container id="Intro" className="mt-5 py-5">
            <Row className="mt-5 d-flex align-items-center gy-4">
                <Col className="col-12 col-lg-6">
                    <h1 data-aos="zoom-in" className="roboto pt-5">Itroduction</h1>
                    <p style={{ textAlign: "justify" }} className="fs-5 roboto">
                        <Typewriter delaySpeed={100} cursor={true} cursorBlinking={true} loop={1} words={["Hi! I’m a 19-year-old Computer Engineering student currently in my second year at Shahed University. I’m passionate about technology, problem-solving, and creating meaningful digital experiences. I’m continuously learning and improving my skills as I explore different areas of software development and the broader world of computing."]} />
                    </p>
                </Col>
                <Col className="text-center col-12 col-lg-6">
                    <img data-aos="fade-left" style={{ borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="w-50" src={HeroImg} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default Hero;