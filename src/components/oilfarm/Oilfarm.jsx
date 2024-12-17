import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ban from "../../assets/chobi5.png"
import "./oilfarm.css"
const Oilfarm = () => {
  return (
    <section className='flex  pt-[28px]'>
        <div className="text mb-[142px] ">
             <p className='text-[64px] font-extrabold pt-[134px] pb-3 ml-[390px]'>Our Services</p>
                    <h6 className=' ml-[390px] pr-[149px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h6>
        </div>
                   
                
        <div className="coil ml-2 ">
            <p className='pt-[147px] pl-[116px] pb-[16px] text-[32px] font-bold text-white'>Modern natural oil and gas refineries.</p>
            <div className="more pl-[119px] ">
                <a className='py-[14px] px-[42px] bg-red-600 no-underline text-white' href="#">Learn More</a>
            </div>
        </div>
    </section>
  )
}

export default Oilfarm