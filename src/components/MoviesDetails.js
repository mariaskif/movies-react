import React from "react";
import { Row, Col } from "react-bootstrap";
 const MoviesDetails=()=>{
     return(
        <div>
            <Row className="justify-content-center">
                < Col md="12" sm="12"  className="mt-4">
   <div className="card-detalis d-flex   align-items-center">
<img className="img-movie w-30"
src=""
alt="no imge"
/>
<div className="justify-content-center text-center text-center mx-auto">
<p className="justify-content-center border-bottom">
اسم الفلم
</p>
<p className="justify-content-center border-bottom">
تاريخ الفلم
</p>
<p className="justify-content-center border-bottom">
عدد المقيمين
</p>
<p className="justify-content-center border-bottom">
    التقييم
</p>
</div>
   </div>
                </Col>
            </Row>
        </div>
     )
}
export default MoviesDetails
