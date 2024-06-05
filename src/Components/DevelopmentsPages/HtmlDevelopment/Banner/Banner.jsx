
import {Row,Col} from 'react-bootstrap';
import htmlBannerimg from '../../../../../public/Image/Html-1.png'


export default function Banner(){
    return(
        <>
        <Row className='d-md-flex d-none justify-content-center align-items-center py-5'
        style={{backgroundImage:`url('${htmlBannerimg}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}
        >
        <Col md >
        <h2 className='hed1  font-bold ' style={{color:"#3b7fbf"}}>CakePHP <span className='hed2 font-bold ' style={{color:"#3b7fbf"}}>  <span  className='hed1  font-bold'>D</span>evelopment</span></h2>
        <div className='w-50 py-2 px-5 d-md-flex d-none align-items-center justify-content-center rounded-5 font-bold'  style={{background: 'linear-gradient(to bottom, #4ECFFF, #3B7FBF)'}}>

        <p className='hed3 text-white'>Intoduce ground breaking chnages in
      
  
         your development with cakePhp</p>

        
        </div>
        <div className='col-md-5 font-medium py-3'>
        <p className='para'>Avail high-end ,yet cost effectivve cakePHP Development
        Services for business all scales and across all industry verticals
        </p>
        </div>
   
        </Col>
        </Row>
        <Row className='d-flex d-sm-none justify-content-center align-items-center'
        >
        <Col md className='px-0 '>
        <img src= {htmlBannerimg} alt=""  className='img-fluid'/>
        <div className='absolute w-50 top-10 left-10'>
        <h2 className=' text-[#3b7fbf] hed2'>CakePhp Development</h2>
        </div>
        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center pt-5' >
        <Col md={10}>
        <h2 className='hed2 text-center'>Ground-breaking CakePHP Development Services</h2>
      
        
        </Col>
        </Row>
        </>
    )
}