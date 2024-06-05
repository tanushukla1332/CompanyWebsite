
import { Row, Col,Carousel } from 'react-bootstrap'
import '../../AboutUsPages/Projects/Projects.css';
import webprojImg from '../../../../public/Image/po3.jpg';
import webproj1Img from '../../../../public/Image/po5.jpg';
import webproj2Img from '../../../../public/Image/po6.jpg';
import webproj3Img from '../../../../public/Image/po1.jpg';


export default function Projects2({titleProjects}) {
    return (
        <Row className='py-5 justify-content-center'   style={{backgroundImage:"url('Image/grey.png')",backgroundRepeat:"no-repeat",
        backgroundSize:"55%",backgroundPosition:"right"}}>
            <div className='text-center'>
                <h2 className='hed2'>{titleProjects}</h2>
            </div>
        
            <Col md={12} className='d-flex justify-content-center align-items-center projectsindictaors' >
                <Carousel indicators={true}>
                    <Carousel.Item>
                        <Row className='justify-content-center align-items-center'>
                            <Col md={5} className='py-3 d-md-flex d-none justify-content-center align-items-center'>
                                <div className='img-1-style'>
                                    <h3>ColorBar Website</h3>
                                    <img src={webprojImg} alt="" className='img-fluid'  />

                                </div>
                            </Col>
                            <Col md={5} className='py-3 d-flex  justify-content-center align-items-center '>
                                <div className='img-1-style'>
                                    <h3>Cissern Website</h3>
                                    <img src={webproj2Img} alt="" className='img-fluid' />

                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className='align-items-center justify-content-center py-3'>
                            <Col md={5} className='py-3 d-flex justify-content-center align-items-center'>
                                <div className="img-1-style">
                                    <h3>King Clean</h3>
                                    <img src={webproj3Img} alt="" className='img-fluid'  />
                                </div>
                            </Col>
                            <Col md={5} className='py-3 d-md-flex d-none justify-content-center align-items-center'>
                                <div className='img-1-style'>
                                    <h3>MDRC</h3>
                                    <img src={webproj1Img} alt="" className='img-fluid'  />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>

    )
}