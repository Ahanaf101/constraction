import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/Logo.png"
import "./heading.css"
const Heading = () => {
  return (
    <section className='nav  bg-red-600 '>
      <Container>
        <Row>
          <Col lg={3}>
            <img className='mt-[23px]' src={logo} alt="" />
          </Col>
          <Col lg={7}>
            <ul className='flex ml-[180px] '>
              <li className='  pt-[30px] pb-[20px] pr-[41px] '><a href="#" className='font-semibold  no-underline text-[20px]  text-white'>Home</a></li>
              <li className='  pt-[30px] pb-[20px] pr-[41px] '><a href="#" className='font-semibold no-underline text-[20px]  text-white'>About</a></li>
              <li className='  pt-[30px] pb-[20px] pr-[41px] '><a href="#" className='font-semibold no-underline text-[20px] text-white'>Services</a></li>
              <li className='  pt-[30px] pb-[20px] pr-[41px] '><a href="#" className='font-semibold no-underline text-[20px] text-white'>Gallery</a></li>
              <li className='  pt-[30px] pb-[20px] pr-[41px] '><a href="#" className='font-semibold no-underline text-[20px] text-white '>Blog</a></li>
            </ul>
          </Col>
          <Col lg={2}>
            <div className="contact flex mt-[20px]  ">
              <a href="#" className='text-white no-underline py-[14px] px-[30px] border-[1px] border-white'>CONTACT</a>
            </div> 
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Heading