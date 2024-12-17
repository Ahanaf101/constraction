import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Text = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg={4}>
                    <p className='text-[48px] font-extrabold pt-[78px] pb-[100px]'>The biggest supplier on the country</p>
                </Col>
                <Col lg={{span:6,offset:2}}>
                <p className='text-[16px] font-medium text-gray-400 pt-[161px] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>

                </Col>
                
            </Row>
        </Container>

    </section>
  )
}

export default Text