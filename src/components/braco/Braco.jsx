import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logoone from "../../assets/Logo1.png"
import logotwo from "../../assets/Logo2.png"
import logothree from "../../assets/Logo3.png"
import logofour from "../../assets/Logo4.png"
const Braco = () => {
  return (
    <section className='py-[117px] '>
        <Container>
            <Row>
                
                <Col lg={3}>
                    <img src={logoone} alt="" />
                </Col>
                <Col lg={3}>
                    <img src={logotwo} alt="" />
                </Col>
                <Col lg={3}>
                    <img src={logothree} alt="" />
                </Col>
                <Col lg={3}>
                    <img src={logofour} alt="" />
                </Col>
                
            </Row>
        </Container>
    </section>
  )
}

export default Braco