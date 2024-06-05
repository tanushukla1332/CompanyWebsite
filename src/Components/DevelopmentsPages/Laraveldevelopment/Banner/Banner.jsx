import { Row, Col } from 'react-bootstrap';
import banner from '../../../../../public/Image/laravel-banner.png'

export default function Banner() {
    return (
        <>
            <Row>
            <Col md className='px-0 '>
            <img src= {banner} className='img-fluid w-100'/>
            <div className='absolute top-10 md:left-20 left-10'>
            <h1 className='md:text-5xl text-sm text-[#3b7fbf] pb-3 '>Laravel Development</h1>
            <p className='para text-black d-md-flex d-none'> Dive into your web app development project <br /> with laravel development services.</p>
            <p className='para text-black d-md-flex d-none'>Employ fast-paced, high quality web apps <br /> through modular programming and <br /> stress- free coding compatible across <br /> platforms and devices</p>
        </div>
                </Col>
               





            </Row>


        </>
    )
}