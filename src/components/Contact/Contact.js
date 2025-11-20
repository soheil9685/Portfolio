import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css"
import ContactMe from "../../assets/images/Contact me.png"

function Contact() {

    const data = [
        {
            id: 1,
            icon: "bi bi-geo-alt",
            text: "IR.IRAN, Tehran",
            delay: 0
        },
        {
            id: 2,
            icon: "bi bi-envelope-at",
            text: "canopus.soheilhosseini@gmail.com",
            delay: 300
        },
        {
            id: 3,
            icon: "bi bi-github",
            text: "soheil9685",
            delay: 600
        },
        {
            id: 4,
            icon: "bi bi-instagram",
            text: "_soheil9685_",
            delay: 900
        },
        {
            id: 5,
            icon: "bi bi-linkedin",
            text: "Mohammad Soheil Hosseini",
            delay: 1200
        }
    ]

    return (
        <Container id="ContactMe" className="mt-5">
            <h1 data-aos="zoom-in" className="roboto pt-5 text-center">Contact Me</h1>
            <Row className="mt-4 d-flex align-items-center">
                <Col className="col-12 col-lg-6 text-center">
                    <img style={{borderRadius: "10px"}} className="w-75" src={ContactMe} alt="" />
                </Col>
                <Col className="col-12 col-lg-6">
                    <div data-aos="fade-left" style={{ borderRadius: "10px" }} className="contact p-3">
                        {data.map(item => (
                            <div key={item.id} data-aos="fade-up" data-aos-delay={item.delay} style={{ backgroundColor: "#FFF4B7", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} className="contactItem p-1 d-flex align-items-center my-3">
                                <i className={`${item.icon} fs-4`}></i>
                                <span className="fs-5 roboto mx-2">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;