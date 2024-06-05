import { Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import '../Count/Count.css';
// Import images
import MaskGroup1Image from '../../../../public/Image/Mask group (1).png';
import MaskGroup2Image from '../../../../public/Image/Mask group (2).png';
import MaskGroup3Image from '../../../../public/Image/Mask group (3).png';
import MaskGroup4Image from '../../../../public/Image/Mask group (4).png';

export default function Count({ clients }) {
    return (
        <>
            <Row style={{ backgroundColor: "#FFF" }} className='justify-content-center'>
                <Col md={12} className='col-count-aboutpage d-flex'>
                    <div className='clients-card2-aboutpage'>
                        <div className='count-img-aboutpage'>
                            <img src={MaskGroup1Image} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={98} duration={3} delay={0} />
                                }

                                %</h5>

                            <p>Clients Satisfied</p>
                        </div>
                    </div>
                    <div className='clients-card2-aboutpage'>
                        <div className='count-img-aboutpage'>
                            <img src={MaskGroup2Image} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>{
                                clients &&
                                <CountUp start={0} end={395} duration={3} delay={0} />
                            }
                                +
                            </h5>
                            <p>Successful Project</p>
                        </div>
                    </div>
                    <div className='clients-card2-aboutpage'>
                        <div className='count-img-aboutpage'>
                            <img src={MaskGroup3Image} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={4} duration={3} delay={0} />}
                                M+</h5>
                            <p>Lines of Code</p>
                        </div>
                    </div>
                    <div className='clients-card2-aboutpage'>
                        <div className='count-img-aboutpage'>
                            <img src={MaskGroup4Image} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={8} duration={3} delay={0} />}
                                +</h5>
                            <p>Years of Excellence</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}
