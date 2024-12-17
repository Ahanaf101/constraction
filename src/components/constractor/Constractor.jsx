import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./constractor.css"
import { RiArrowDropRightLine } from "react-icons/ri";

const Constractor = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="pop">
                        <p className='pt-[75px] px-[45px] pb-[50px] text-[34px] font-bold text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div className="koku  pl-[45px]">
                            <a className='py-[14px] px-[30px] bg-transparent border-[1px] border-white no-underline text-white  ' href="#">Read More</a>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="jop">
                        <p className='pt-[75px] px-[45px] pb-[50px] text-[34px] font-bold text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div className="koku  pl-[45px]">
                            <a className='py-[14px] px-[30px] bg-transparent border-[1px] border-white no-underline text-white  ' href="#">Read More</a>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="top">
                        <p className=' text-[34px] font-bold text-white pt-[75px] px-[45px] pb-[50px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div className="koku  pl-[45px]">
                            <a className='py-[14px] px-[30px] bg-transparent border-[1px] border-white no-underline text-white  ' href="#">Read More</a>
                        </div>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className="chot pt-[28px] pb-[109px] flex justify-end">
                         <h6 className='text-[16px] font-bold mt-2  text-black'>MORE FROM THE BLOG</h6>
                         <RiArrowDropRightLine className='text-[35px]' />

                    </div>
                   
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Constractor