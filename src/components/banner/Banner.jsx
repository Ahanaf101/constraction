import React from 'react'
import { Col, Row,Container } from 'react-bootstrap'
import "./banner.css"
const Banner = () => {
  return (
    <section className='banner' >
      <Container>
        <Row>
          <Col   lg={9}>
            <h2 className='text-[64px] text-white font-bold pt-[257px] pb-[32px]'>We exist since 1975 on the oil and gas industry.</h2>
            <div className="learnmore pb-[350px]">
              <a className='py-[14px] px-[40px]  bg-red-600 no-underline text-white ' href="https://www.harvard.edu/search/?q_as=cse">Learn More</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner