
import {Row,Col,Button}  from 'react-bootstrap';

import './Section.css';
import cli1 from '../../../../../../public/Image/cli-2 (1).png';
import cli2 from '../../../../../../public/Image/cli-2 (12).png';
import cli3 from '../../../../../../public/Image/cli-2 (11).png';
import cli4 from '../../../../../../public/Image/cli-2 (10).png';
import cli5 from '../../../../../../public/Image/cli-2 (9).png';
import cli6 from '../../../../../../public/Image/cli-2 (8).png';
import cli7 from '../../../../../../public/Image/cli-2 (7).png';
import cli8 from '../../../../../../public/Image/cli-2 (6).png';
import cli9 from '../../../../../../public/Image/cli-2 (5).png';
import cli10 from '../../../../../../public/Image/cli-2 (4).png';
import cli11 from '../../../../../../public/Image/cli-2 (3).png';
import cli12 from '../../../../../../public/Image/cli-2 (2).png';

export default function Section(){
    return(
        <>
        <Row className='flex items-center justify-center py-4'>
        <Col md={10}>
        <h2 className='text-md-3xl  text-md font-[600] text-[#5e5e5e] text-center uppercase'>You are in good Company</h2>
        <div className='flex  flex-col items-center justify-center'> 
        <div className='gap-md-5 gap-3 d-flex items-center justify-center  my-3'>
        <img src= {cli1}
        alt="" className='img-fluid clientspage-img d-md-flex d-none' />
        <img src= {cli2}
         alt=""  className='img-fluid  clientspage-img' />
        <img src={cli3}
         alt=""  className='img-fluid clientspage-img' />
        <img src= {cli4} 
        alt=""  className='img-fluid clientspage-img' /> 
        </div>
       
        <div className='d-flex gap-md-5 gap-3  align-items-center justify-content-center my-3' >
        <img src= {cli6}
        alt=""  className='img-fluid clientspage-img d-md-flex d-none ' />
        <img src= {cli7}
         alt=""  className='img-fluid clientspage-img ' />
        <img src= {cli8}
        alt="" className='img-fluid clientspage-img'  />
        <img src= {cli9}
        alt="" className='img-fluid clientspage-img'  />
        </div>
        <div className='d-md-flex  d-none align-items-center justify-content-center gap-5 '>
        <img src={cli10}
         alt="" className='img-fluid clientspage-img
         '  />
        <img src= {cli11} alt=""  
        className='img-fluid  clientspage-img'  />
        <img src={cli5}
        alt=""  className='img-fluid  clientspage-img' />
        <img src= {cli12}
        alt=""  className='img-fluid clientspage-img ' />
        </div>
    

        </div>

        </Col>
        </Row>
   
        </>
    )
}