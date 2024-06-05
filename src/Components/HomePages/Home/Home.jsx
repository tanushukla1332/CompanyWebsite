import { Helmet } from 'react-helmet';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import '../../HomePages/Home/Home.css'
import Blog from '../../Blog/Blog2';
import Contact from '../../HomePages/Contact/Contact';
import Banner from '../../HomePages/Bannerpage/Banner';
import Count from '../../HomePages/Count/Count'
import ScrollTrigger from 'react-scroll-trigger'
import Testominials from '../Testominals/Testomnials';
import Port from '../Port/Port';
import { useNavigate } from 'react-router';
import Services from '../Services/Services';
import Technical from '../TechnicalDev/Technical';








export default function Home() {
    const [clients, setClients] = useState(false)
    const navigate = useNavigate()




    return (

        <>
            <Helmet>
                <title> Software Development and IT Consultancy Solutions | Razobyte SoftTech</title>
                <meta
                    name="Home page"
                    content=" Discover Razobyte SoftTech's IT consultancy near you for strategic, operational, and technical consulting. 
                    With 12 years of experience, we provide IT solutions and software development services."
                />
            </Helmet>

            <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)} >
                <Banner />
                <Count clients={clients} />
                <Row className='d-none d-sm-flex justify-content-center align-items-center py-5 px-0 gap-5'
                    style={{
                        backgroundColor: "#FFFF "
                    }}>
                    <div className='text-center'>
                        <h2 className='hed2 text-[#3b7fbf]'>What’s the RAZO about!</h2>
                        <h2 className='para'>Responsive-Algorithm & Zero-Defects Optimization.</h2>
                    </div>
                    <Col md={5} className='d-md-flex'
                    >
                        <Image src='/Image/Home-2.png' alt='' fluid style={{ borderRadius: "4px", boxShadow: "5px 2px 5px 2px rgba(0,0,0,0.0.168)", backgroundColor: "#3b7fbf6c " }}

                        /></Col>
                    <Col md={5}>
                        <div className='spacing'
                            style={{
                                backgroundImage: "url('/Image/grey.png')",
                                backgroundSize: "70%",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundColor: "#FFFF "

                            }}>

                            <p className='para text-left'>A leading IT company that makes a perfect blend of
                                Technology and Marketing. With the world getting
                                smaller day by day, new trends are emerging much
                                more frequently than usual, specially with AI riding
                                the highest horses. So how can businesses ensure their
                                website remain relevant?</p>
                            <p className='para text-left'> The solution is simple, stay ahead of the trends!
                                There are 3 phases in which people hop on trends,
                                Early Adopters, Followers, and the rest. The people who
                                gain the most from trends are the early adopters, and
                                that is what we aim for. Our team of Marketers and
                                Developers, constantly look for the patterns and
                                upcoming trends in order to ensure that our client’s
                                always look updated and the designs look latest.
                            </p>

                            <div className='py-2'>
                                <Button variant='light' className='btnmain'
                                    onClick={() => navigate('/about')}>Know More</Button>
                            </div>

                        </div>
                    </Col>
                </Row>
                <Row className='d-block d-sm-none pt-3'
                    style={{
                        backgroundImage: "url('/Image/grey.png')",
                        backgroundSize: "80%",
                        backgroundPosition: "center",
                        backgroundColor: "#FFFF",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className='text-center'>
                        <h2 className='hed2'>What’s the RAZ about!</h2>
                        <h2 className='subheading-sections'>Responsive-Algorithm & Zero-Defects Optimization.</h2>
                    </div>
                    <Col md={6}>
                        <div className='spacing'>
                            <p className='para text-justify'>A leading IT company that makes a perfect blend of
                                Technology and Marketing. With the world getting
                                smaller day by day, new trends are emerging much
                                more frequently than usual, specially with AI riding
                                the highest horses. So how can businesses ensure their
                                website remain relevant?</p>
                            <p className='para text-justify'> The solution is simple, stay ahead of the trends!
                                There are 3 phases in which people hop on trends,
                                Early Adopters, Followers, and the rest. The people who
                                gain the most from trends are the early adopters, and
                                that is what we aim for. Our team of Marketers and
                                Developers, constantly look for the patterns and
                                upcoming trends in order to ensure that our client’s
                                always look updated and the designs look latest.
                            </p>
                            <div className='d-flex justify-content-center  pb-3'>
                                <Button variant='light' className='btnmain' style={{ borderRadius: '1px' }}
                                    onClick={() => navigate('/about')}
                                >Know More</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='d-md-flex align-items-center d-none'
                    >
                        <Image src='/Image/Home-2.png' alt='' fluid style={{ maxWidth: "100%", maxHeight: "105%", borderRadius: "4px", boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.1)", backgroundColor: "#3b7fbf6c ", paddingTop: "50px" }}
                        />
                    </Col>
                </Row>
                <Services />
                <Technical />
                <Row className='d-flex justify-content-center align-items-center py-5'
                    style={{ backgroundImage: "url('Image/Rectangle 51 (1).png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
                >
                    <div className='text-center'>
                        <h2 className='hed2 text-light'>Our Clients</h2>
                        <p className='para text-light text-center'>From startups to Fortune 350 companies,</p>
                    </div>
                    <Col md
                    >
                        <Marquee >
                            <div className='allclients'>
                            <div className='d-flex '>
                                    <img src="Image/cli-2 (3).png" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex'>
                                    <img src="Image/cli-2 (1).png" alt="hello" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="Image/cli-2 (2).png" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="Image/cli-2 (3).png" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="Image/cli-2 (4).png" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="Image/cli-2 (5).png" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                <img src="Image/cli-2 (5).png" alt="" className='img-fluid' />
                            </div>
                                <div className='d-flex '>
                                    <img src="Image/cli-2 (6).png" alt="" className='img-fluid' />
                                </div>
                            </div>

                        </Marquee>
                        <Marquee autoFill pauseOnClick direction='right'>
                            <div className='allclients'>
                                <div className=' d-flex '>
                                    <img src="Image/cli-2 (7).png" alt="" className='img-fluid' />
                                </div>

                                <div className='d-flex '>
                                    <img src="Image/cli-2 (8).png" alt="" className='img-fluid' />
                                </div>
                                <div className=' d-flex '>
                                <img src="Image/cli-2 (7).png" alt="" className='img-fluid' />
                            </div>
                                <div className='d-flex '>
                                    <img src="Image/cli-2 (9).png" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="Image/cli-2 (9).png" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="Image/cli-2 (10).png" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="Image/cli-2 (11).png" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex'>
                                    <img
                                        src="Image/cli-2 (12).png"
                                        alt=""
                                        className='img-fluid'
                                    />
                                </div>
                            </div>

                        </Marquee>
                    </Col>
                </Row>
                <Contact clients={clients} />


                <Testominials />

                <Port />
                <Blog
                    title="Blogs" />


            </ScrollTrigger>











        </>

    )
}