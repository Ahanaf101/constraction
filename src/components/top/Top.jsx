import { Col, Container,Row } from 'react-bootstrap'
import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { PiClockAfternoon } from 'react-icons/pi';

const Top = () => {
  return (
    <section className='pt-[14px] bg-Black'>
      <Container>
        <Row>
          <Col className='flex' lg={5}>
            <div className="mail flex">
              <MdOutlineMailOutline className='mt-[5px] mr-1 text-white' />
              <p className='text-white'>mail@yourcompany.com</p>
            </div>
              <div className="line h-[10px] mt-2 ml-3 w-[1px] bg-gray-500"></div>
            <div className="call flex ml-3">
               <IoCallOutline className='mt-1 text-white mr-1' />
               <p className='text-white'>+896 120 5889 (Toll free)</p>
            </div>
          </Col>
          <Col lg={{span:2,offset:5}}>
            <div className="icon flex gap-3 mt-1 ml-6">
            <FaFacebookF className='text-white' />
            <FaTwitter className='text-white' />
            <FaLinkedinIn className='text-white'/>
            <BsInstagram className='text-white'/>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Top