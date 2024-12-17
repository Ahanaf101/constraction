import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./lopo.css"
const Lopo = () => {
  return (
    <section className='lutu  pt-[136px] pb-[136px]'>
        <Container>
            <Row>
                <Col className='bg-red-600 '  lg={4}>
                    <p className='pt-[100px] pb-[80px] px-[75px] text-[46px] font-extrabold text-white'>Learn more about our company</p>
                </Col>
                <Col lg={8} className='lopobg '>
                    <div className="lop ml-[382px] mt-[200px] ">
                        <a className=' py-[14px] no-underline text-red-600 px-[30px] bg-white border-[1px] border-red-600 ' href="#">Learn Mores</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Lopo