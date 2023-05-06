import React from "react"
import { Pagination } from "react-bootstrap";
import  ReactPaginate from 'react-paginate'

const Pagenationcom= (getPage,pageCount)=>{
    const handelPageClick=(data)=>{
console.log(data.selected +1)
getPage(data.selected +1)
    }
return(
    <ReactPaginate  
    breakLabel="..."
    nextLabel=" next > "
    onPageChange={handelPageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="< previous "
    renderOnZeroPageCount={null}
    containerClassName="pagination justify-content-center p-3"
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    nextClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
    />
      
    )
}
export default Pagenationcom