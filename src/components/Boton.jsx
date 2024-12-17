import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Boton = () => {
  return (
    <section className='bg-red-600'>
        <Container>
            <Row>
                <Col className='flex' lg={12}>
                    <h6 className='pt-[25px] ml-[80px] text-[35px] font-bold text-white'>Want to join as member branch in your area?</h6>
                    <div className="learn pt-[37px] pb-[37px] ml-[150px]">
                        <a className='no-underline py-[13px] px-[30px] bg-red-600 border-[1px] text-white border-white' href="#">Learn More</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Boton