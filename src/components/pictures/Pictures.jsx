import React from 'react'
import chobione from "../../assets/chobi1.png"
import chobitwo from "../../assets/chobi2.png"
import  chobithree from "../../assets/chobi3.png"
import chobifour from "../../assets/chobi4.png"

import { Container, Row,Col } from 'react-bootstrap'
const Pictures = () => {
  return (
     <>
    
      <div className="pictures justify-between flex">
        <img src={chobione} alt="" />
        <img src={chobitwo} alt="" />
        <img src={chobithree} alt="" />
        <img src={chobifour} alt="" />
      </div>
     
    
     </>
        
   
  )
}

export default Pictures