import React, { useState } from 'react';
import { Row, Col, CardBody, CardTitle, Card, Button, Carousel, CarouselItem } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import blogsData from './BlogsData.json';
import '../Blog/Blog.css'; // Assuming you have your custom styles in this file

export default function Blog({ title, Btn }) {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const firstCardData = blogsData[0];
    const secondCardData = blogsData[1];
    const thirdCardData = blogsData[2];
    const FourthCardData = blogsData[3];
    const FifthCardData = blogsData[4];
    const SixthCardData = blogsData[5];

    return (
        <Row className='justify-content-center flex-col align-items-center py-4 bg-[#fff]'>
            <div className='text-center text-light'>
                <h3 className='hed2'>{title}</h3>
                <p className='para'>Take a peek inside our expert’s minds</p>
            </div>
            <Col md={12} className='pb-3 d-flex flex-col justify-content-center align-items-center '>
                <Row className='flex justify-center items-center'>
                    <Col md={9} className='blogsindicators'>
                        <Carousel indicators activeIndex={index} onSelect={handleSelect}>
                            <CarouselItem>
                                <div className='flex items-center justify-center gap-2 py-3'>
                                    <Card className='d-md-flex d-none  justify-content-center align-items-center cardmain-blog2 w-100' onClick={() => navigate('/firstBlog')}>
                                        <img src={firstCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
                                        <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                                            <CardTitle>
                                                <div className='allcardData'>
                                                    <h3 className='hed3 text-white'>{firstCardData.title}</h3>
                                                    <p className='text-white'>{firstCardData.content}</p>
                                                    <Button className='read-more-btn-blog'>Read more</Button>
                                                </div>
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card className='d-md-flex d-none  justify-content-center align-items-center cardmain-blog2 w-100' onClick={() => navigate('/secondBlog')}>
                                        <img src={secondCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
                                        <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                                            <CardTitle>
                                                <div className='allcardData'>
                                                    <h3 className='hed3 text-white'>{secondCardData.title}</h3>
                                                    <p className='text-white'>{secondCardData.content}</p>
                                                    <Button className='read-more-btn-blog'>Read more</Button>
                                                </div>
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card className='d-md-flex   justify-content-center align-items-center cardmain-blog2 w-100' onClick={() => navigate('/thirdBlog')}>
                                        <img src={thirdCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
                                        <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                                            <CardTitle>
                                                <div className='allcardData'>
                                                    <h3 className='hed3 text-white'>{thirdCardData.title}</h3>
                                                    <p className='text-white'>{thirdCardData.content}</p>
                                                    <Button className='read-more-btn-blog'>Read more</Button>
                                                </div>
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                    {/* Include other cards here */}
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className='flex items-center justify-center gap-2 py-3'>
                                <Card className='d-md-flex justify-content-center align-items-center cardmain-blog2 w-100' onClick={() => navigate('/fourthBlog')}>
                                <img src={FourthCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
                                <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                                    <CardTitle>
                                        <div className='allcardData'>
                                            <h3 className='hed3 text-white'>{FourthCardData.title}</h3>
                                            <p className='text-white'>{FourthCardData.content}</p>
                                            <Button className='read-more-btn-blog'>Read more</Button>
                                        </div>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                            <Card className='d-md-flex d-none justify-content-center align-items-center cardmain-blog2 w-100' onClick={() => navigate('/fifthBlog')}>
                                        <img src={FifthCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
                                        <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                                            <CardTitle>
                                                <div className='allcardData'>
                                                    <h3 className='hed3 text-white'>{FifthCardData.title}</h3>
                                                    <p className='text-white'>{FifthCardData.content}</p>
                                                    <Button className='read-more-btn-blog'>Read more</Button>
                                                </div>
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card className='d-md-flex d-none justify-content-center align-items-center cardmain-blog2 w-100' onClick={() => navigate('/sixthBlog')}>
                                        <img src={SixthCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
                                        <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                                            <CardTitle>
                                                <div className='allcardData'>
                                                    <h3 className='hed3 text-white'>{SixthCardData.title}</h3>
                                                    <p className='text-white'>{SixthCardData.content}</p>
                                                    <Button className='read-more-btn-blog'>Read more</Button>
                                                </div>
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
