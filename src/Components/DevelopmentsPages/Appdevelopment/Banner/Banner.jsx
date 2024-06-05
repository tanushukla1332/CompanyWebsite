
import {Row,Col,Button} from 'react-bootstrap';
import '../Banner/Banner.css';
import devImg1 from '../../../../../public/Image/dev-2.png'


export default function Banner(){
    return(
        <>
    
        <Row className=' flex justify-content-between bg-[#3b7fbf]'>
        <Col md={5}>
        <div >
        <h1 className='hed1 text-white'>Your Success Is Our Purpose</h1>
        <h4 className='hed3 text-white'>we've Got Experienced Developers</h4>
        <p className='para text-white' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, soluta.</p>
        <Button className='site-button'>Get a web Development</Button>
        </div>
        </Col>
        <Col md={5}>
        <div>
        <img src={devImg1} alt="" className='img-fluid'/>
        </div>
        </Col>

       
 

      

        </Row>
        <Row className='d-flex d-sm-none  justify-content-center align-items-center backcolor py-5'>
        <Col md={8} className='d-flex justify-content-center  align-items-center'>
        <div>
        <h1 className='hed2 text-light'>Your Success Is Our Purpose</h1>
        <h4 className='hed3 text-light'>we've Got Experienced Developers</h4>
        <p className='para text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, soluta.</p>
        <Button className='site-buttonx d-none'>Get a web Development</Button>
        </div>
        </Col>
        <Col md={4} className='d-flex justify-content-center align-items-center' >
        <img src={devImg1} alt="" className='img-fluid'/>
        </Col>
        </Row>
     </>
    )
}