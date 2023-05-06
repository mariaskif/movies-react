import React from 'react'
import {Row,Button ,Col,Form,Nav,Navbar,NavDropdown,Container ,Card} from 'react-bootstrap'
import Cards from './Cards'
import Pagenationcom from './Pagenation'

const Cardcontent=({movies,getPage,pageCount})=>{
return(
    <Row className='mt-3'>

        { movies.length >=1 ? (movies.map((mov)=>{
           return( <Cards key={mov.id} mov={mov}/>)

        })):<h3>لا يوجد أفلام </h3>}
       <Pagenationcom getPage={getPage} pageCount={pageCount}/>
    </Row>
)
}
export default Cardcontent