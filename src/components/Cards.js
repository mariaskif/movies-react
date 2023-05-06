import React from 'react'
import {Row,Button ,Col,Form,Nav,Navbar,NavDropdown,Container ,Card} from 'react-bootstrap'
import {link} from 'react-router-dom'
const Cards = ({mov}) => {
  return (
  <Col xs="6" sm="6" md="4" lg="3" className="my-1">
    <link to={`/movie/${mov.id}`}>
<div className="card">
 <img src={mov.logo_path} className='' alt='no image'  />
 <div className="card__overlay">
<div className='overlay__text text-center w-100 p-2'>
<p>اسم الفيلم: {mov.title}</p>
<p> تاريخ الاصدار</p>
<p> التقييم:</p>

</div>
 </div>
</div>
</link>
  </Col>
  )
}

export default Cards