
import { Row, Col, Button } from 'react-bootstrap';
import '../Banner/Banner.css';
import ebannImg from '../../../../../public/Image/Ecommerce-banner.png'

export default function Banner() {
    return (
        <>
          <Row className='flex items-center justify-center'
            >
                <Col md className='flex items-center justify-center px-0'>
                <img src= {ebannImg} alt="" className='img-fluid' />
                <div className='absolute md:top-40 top-5 md:left-20  left-5'>
                <h1 className='md:text-5xl text-sm text-[#3b7fbf]'>Maximize Your Online Store's <br /> Potential</h1>
                <p className='para text-black d-md-flex d-none'>Streamlined Solutions for Seamless <br /> Selling Experiences.</p>
                </div>
              

                </Col>
            </Row>
        </>
    )
}