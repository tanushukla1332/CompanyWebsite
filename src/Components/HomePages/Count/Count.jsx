import { Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import '../Count/Count.css';


export default function Count({ clients }) {

   
    return (
        <>
        <Row style={{ backgroundColor: "#FFFF" }}  >
                <Col md className='col-count-homepage d-block d-none d-md-flex'>
                    <div className='clients-card-homepage'  data-aos="fade-up" data-aos-duration="3000">
                        <div className='count-img-homepage'>
                            <img src="Image/Mask group (1).png" alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={98} duration={3} delay={0} />
                                }
                                %
                            </h5>
                            <p>Clients Satisfied</p>
                        </div>
                    </div>
                    <div className='clients-card-homepage'>
                        <div className='count-img-homepage'>
                            <img src="Image/Mask group (2).png" alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={340} duration={3} delay={0} />
                                }
                                +
                            </h5>
                            <p>Successful Project</p>
                        </div>
                    </div>
                    <div className='clients-card-homepage'>
                        <div className='count-img-homepage'>
                            <img src="Image/Mask group (3).png" alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={4} duration={3} delay={0} />}
                                M+
                            </h5>
                            <p>Lines of Code</p>
                        </div>
                    </div>
                    <div className='clients-card-homepage'>
                        <div className='count-img-homepage'>
                            <img src="Image/Mask group (4).png" alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={8} duration={3} delay={0} />}
                                +
                            </h5>
                            <p>Years of Excellence</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </>


        
    )
}
