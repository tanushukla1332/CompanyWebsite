import { Row, Col,Image } from 'react-bootstrap';
import './Banner.css'


export default function Banner({ title ,image,para,para2}) {
    return (
        <>
            <Row className='d-md-flex justify-content-center align-items-center pb-5'
            >
                <Col md className='d-flex justify-center items-center px-0'
                > 
                <div className='image-container '>
                <Image src={image} alt={title} 
                 fluid width="100%"/>

                </div>
                    <div className='absolute left-10'>
                        <h1 className='hed1 text-white'>{title}</h1>
                        <p className='para text-white text-left'>{para}</p>
                        <p className='para text-white text-left d-md-block d-none'>{para2}</p>
                        <div className='image-container'>
                    
                    </div>
                    </div>
                </Col>
            </Row>

        </>
    )
}