import {Row,Col} from 'react-bootstrap';
import phpbnrImg from '../../../../../public/Image/php-banner.png'

export default function Banner(){
    return(
        <>
        <Row className='d-flex justify-content-center align-items-center' 
        >
        <Col md className='px-0'>
        <img src= {phpbnrImg} className='img-fluid w-100'/>
        <div className='absolute top-40 left-5'>
        <h1 className='md:text-5xl text-sm text-white'>Custom PHP Development Services</h1>
        <p className='para text-white d-md-flex d-none'>custome php web development company to take your businees to the <br />
         next level and drive-large scale transformation.</p>
        </div>
        </Col>
          
        

        </Row>

        </>
    )
}