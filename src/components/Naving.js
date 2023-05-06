import React, { useState } from 'react'
import {Row,Button ,Form,Nav,Navbar,NavDropdown,Container } from 'react-bootstrap'
const Naving = ({search}) => {
  const onsearch=({word})=>{
    search(word)
  }
  const [searchdata,setsearchdata] =useState('')

  return (
    <Row> 
         <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#" >
          <div className='brand-color'> أفلام منوعة</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="اكتب ما تريد ان تبحث عنه هنا .."
              className="mx-2"
              aria-label="بحث"
              onChange={(e)=>onsearch(e.target.value)}
            />
            <Button variant="outline-success" >بحث</Button>
{/* <button className='btn'>بحث</button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default Naving