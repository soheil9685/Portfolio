import { Col, Container, Row } from "react-bootstrap"
import "./SkillItem.css"

function SkillItem() {

    const data = [
        {
            id: 1,
            text: "HTML/CSS",
            delay: 0
        },
        {
            id: 2,
            text: "Java Script",
            delay: 300
        },
        {
            id: 3,
            text: "React.Js",
            delay: 600
        },
    ]

    return (
        <Container id="Skill">
            <h1 className="roboto mt-5 py-5 text-center">Skills</h1>
            <Row className="gy-3">
                {data.map(item => (
                    <Col className="col-12 col-md-6 col-lg-4">
                        <h5 key={item.id} data-aos="zoom-in-up" data-aos-delay={item.delay} style={{ backgroundColor: "#03045E", color: "#DA0037", borderRadius: "10px", borderBottom: "4px solid #DA0037", boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px" }} className="p-3">{item.text}</h5>
                    </Col>)
                )}
            </Row>
        </Container>
    )
}

export default SkillItem;