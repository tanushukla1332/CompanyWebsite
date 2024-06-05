
import { Row, Col } from 'react-bootstrap';
import '../../Development.css'
import { FaCheck } from "react-icons/fa6";
import Blog from '../../../Blog/Blog2';
import { useNavigate } from 'react-router';
import Projects2 from '../../../AboutUspages/Projects/Projects2';
import blueBackgroundImage from '../../../../../public/Image/blue.png';
import html2Image from '../../../../../public/Image/Html-2.png';
import html51Image from '../../../../../public/Image/html5 (1).png';
import html52Image from '../../../../../public/Image/html5 (2).png';
import html53Image from '../../../../../public/Image/html5 (3).png';
import html54Image from '../../../../../public/Image/html5 (4).png';
import Html6 from '../../../../../public/Image/Html-6.png';

import html6_1Image from '../../../../../public/Image/html6 (1).png';
import html6_2Image from '../../../../../public/Image/html6 (2).png';
import html6_3Image from '../../../../../public/Image/html6 (3).png';
import html7_1Image from '../../../../../public/Image/Html-7 (1).png';
import html7_2Image from '../../../../../public/Image/Html-7 (2).png';
import html7_3Image from '../../../../../public/Image/Html-7 (3).png';
import html7_4Image from '../../../../../public/Image/Html-7 (4).png';
import html7_5Image from '../../../../../public/Image/Html-7 (5).png';
import html7_6Image from '../../../../../public/Image/Html-7 (6).png';
import lar8_1Image from '../../../../../public/Image/lar-8 (1).png';
import lar8_2Image from '../../../../../public/Image/lar-8 (2).png';
import lar8_6Image from '../../../../../public/Image/lar-8 (6).png';
import lar8_7Image from '../../../../../public/Image/lar-8 (7).png';
import lar8_8Image from '../../../../../public/Image/lar-8 (8).png';
import lar8_9Image from '../../../../../public/Image/lar-8 (9).png';
import lar8_10Image from '../../../../../public/Image/lar-8 (10).png';
import lar8_11Image from '../../../../../public/Image/lar-8 (11).jpg';
import lar8_12Image from '../../../../../public/Image/lar-8 (12).png';
import shopify7Image from '../../../../../public/Image/shopify7.png';
import codiImage from '../../../../../public/Image/Codi.png';
import php5Image from '../../../../../public/Image/php-else (5).png';
import php3Image from '../../../../../public/Image/php-else (3).png';
import php4Image from '../../../../../public/Image/php-else (2).png';
import php2Image from '../../../../../public/Image/php-else (4).png';
import php6Image from '../../../../../public/Image/php-else(6).png';
import php7Image from '../../../../../public/Image/php-else(7).png';
import reactImage from '../../../../../public/Image/Html-5 (1).png';


export default function Section(title) {
    const navigate = useNavigate()
    return (
        <>
            <Row className='d-flex justify-content-center align-items-center gap-5 py-5'>
                <Col md={5}>
                    <h3 className='hed3 text-left'>Redefining Web Solutions with
                        CakePHP Framework</h3>
                    <p className='para text-left'>Experience the power of expert HTML & CSS development with Razobyte. As a premier IT solutions and digital marketing company, we specialize in crafting visually stunning and highly functional websites using the latest HTML and CSS technologies. Discover how our tailored solutions can help you establish a strong and captivating online presence.</p>
                    <p className='para text-left'>
                        Join our satisfied clients who have entrusted Razobyte with their HTML & CSS development needs. From startups to Fortune 500 companies, we deliver results-driven solutions that exceed expectations. Let Razobyte be your trusted partner for all your HTML & CSS development needs.</p>
                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center'
                    style={{ backgroundImage: `url(${blueBackgroundImage })`, backgroundSize: "500px 300px", backgroundRepeat: "no-repeat", backgroundPosition: "top" }}>
                    <img src={html2Image} alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'
                style={{ background: "linear-gradient(to bottom, #3b7fbf, #4ECFFF)" }}>
                <Col md={10}>
                    <h3 className='hed2 text-center text-white' >Why HTML & CSS for Your Website?</h3>

                    <div className='d-md-flex  justify-content-center align-items-center gap-5 p-3'>
                        <div className='html-section1 my-3'>
                            <h3 className='hed3 pt-2 text-center' style={{ color: "#3b7fbf" }}>Versatility</h3>
                            <p className='para  text-center pt-2'>
                                HTML & CSS provide unparalleled flexibility, enabling the creation of visually engaging and responsive websites adaptable to various devices.</p>
                        </div>
                        <div className='html-section1'>
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>Performance</h3>
                            <p className='para text-center  pt-2'>HTML & CSS-based websites are lightweight and load quickly, ensuring optimal performance and user experience.</p>
                        </div>
                        <div className='html-section1 my-3'>
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>SEO-Friendly</h3>
                            <p className='para text-center  pt-2'>
                                HTML's semantic markup and CSS's styling capabilities contribute to creating SEO-friendly websites that rank higher in search engine results.</p>
                        </div>
                    </div>
                    <div className='d-md-flex  d-none justify-content-center align-items-center gap-5 p-3'>
                        <div className='html-section1'>
                            <h3 className='hed3 pt-2 text-center' style={{ color: "#3b7fbf" }}>Accessibility</h3>
                            <p className='para text-center pt-2' >
                                HTML & CSS enable the creation of accessible websites, enhancing inclusivity and usability for all users.</p>
                        </div>
                        <div className='html-section1'>
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>CakePHP Website
                                Development</h3>
                            <p className='para text-center pt-2'>Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem
                                Ipsum is simply dummy text
                                Lorem Ipsum is simply dummy
                                text of the printing and text.</p>
                        </div>
                        <div className='html-section1'>
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>CakePHP Maintenance
                                Services</h3>
                            <p className='para text-center pt-2'>Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem
                                Ipsum is simply dummy text
                                Lorem Ipsum is simply dummy
                                text of the printing and text.</p>
                        </div>
                    </div>






                </Col>

            </Row>
            <Row className='d-md-flex  d-none justify-content-center align-items-center py-5'
                style={{
                    backgroundImage: `url(${blueBackgroundImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundSize: "450px"
                }}>
                <h2 className='hed2 text-center' style={{ color: "#3b7fbf" }}>Our HTML & CSS Development Services</h2>
                <p className='para text-center'>Razobyte offers a range of HTML & CSS development services to meet your needs:</p>
                <Col md={10}>
                    <div>
                        <div className='d-flex gap-2'>
                            <FaCheck className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22} />
                            <p className='para text-[#3b7fbf]'>Custom Website Design</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <FaCheck className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22} />
                            <p className='para text-[#3b7fbf]'>Responsive Web Development</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <FaCheck className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22} />
                            <p className='para text-[#3b7fbf]'>Template Customization</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <FaCheck className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22} />
                            <p className='para text-[#3b7fbf]'>Website Redesign</p>
                        </div>
                        <div className='d-flex gap-2 '>
                            <FaCheck className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22} />
                            <p className='para text-[#3b7fbf]'>Landing Page Creation</p>


                        </div>
                        <div className='d-flex gap-2 '>
                            <FaCheck className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22} />

                            <p className='para text-[#3b7fbf]'>Template Customization</p>

                        </div>
                        <div className='d-flex gap-2'>
                            <FaCheck className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22} />
                            <p className='para text-[#3b7fbf]'>Staying Ahead with Latest HTML & CSS Technologies</p>





                        </div>

                    </div>


                </Col>

            </Row>

            <Row className='d-flex justify-content-center align-items-center gap-5 py-4'>
                <Col md={10}>
                    <div>
                        <h2 className='hed2 text-center pb-3'>Technology Perform We Use</h2>
                    </div>
                    <div>
                        <div className='d-flex justify-content-center align-items-center gap-md-4 gap-sm-4'>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {lar8_12Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3  fs-6 fs-md-6  pt-md-2 text-center' style={{ color: "#3b7fbf" }}>Node js</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {lar8_11Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 fs-md-6 pt-md-2  text-center' style={{ color: "#3b7fbf" }}>Angular js</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {lar8_10Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 fs-md-6 pt-md-2  text-center' style={{ color: "#3b7fbf" }}>React js</h3>
                            </div>
                            <div className='d-md-flex d-none flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {lar8_9Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 fs-md-6 pt-md-2  text-center' style={{ color: "#3b7fbf" }}>.Net Core</h3>
                            </div>
                            <div className='d-md-flex d-none flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src={lar8_8Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6  fs-md-6 pt-md-2  text-center' style={{ color: "#3b7fbf" }}>Laravel</h3>
                            </div>

                        </div>
                        <div className='d-md-flex d-none justify-content-center align-items-center gap-4 '>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {lar8_7Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2  text-center' style={{ color: "#3b7fbf" }}>Rxweb.io</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src={lar8_6Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2  text-center' style={{ color: "#3b7fbf" }}>Mean</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8' onClick={() => navigate('/CodeIgniter')}>
                                <img src={html51Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2  text-center' style={{ color: "#3b7fbf" }}>Ruby no rails</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {lar8_2Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2  text-center' style={{ color: "#3b7fbf" }}>Express Js</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src={html52Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2  text-center' style={{ color: "#3b7fbf" }}>Lonic</h3>
                            </div>

                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-md-4 gap-sm-4 '>

                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {lar8_1Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2  text-center' style={{ color: "#3b7fbf" }}>Vue js</h3>
                            </div>



                        </div>


                    </div>
                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center py-5 bgphp'>
                <h2 className='hed2 text-white text-center'>Leveraging Latest HTML & CSS Versions and Features</h2>

                <Col md={10}>
                    <div>
                        <div className='d-flex flex-sm-row items-center justify-center gap-md-5 gap-2 py-5'>
                            <div className='d-sm-block d-none bg-[#ffff]  w-1/2 p-3 rounded-3 d-md-block d-none md:h-[250px] h-[150px] ani'>
                                <img src= {html54Image} alt="" className='img-fluid' />
                                <h3 className='hed3 text-[#3b7fbf]'>HTML5</h3>
                                <p className='para'>Harnessing semantic markup
                                    to create well-structured and
                                    SEO-friendly websites.</p>
                            </div>
                            <div className='bg-[#ffff]   w-1/2 p-3 rounded-3  md:h-[250px] h-[220px] ani '>
                                <img src= {html53Image} alt="" className='img-fluid' />
                                <h3 className='hed3 text-[#3b7fbf]'>CSS3</h3>
                                <p className='para'>Utilizing modern CSS features
                                    for responsive design and
                                    enhanced visual effects.</p>
                            </div>
                            <div className='bg-[#ffff]  w-1/2 p-3 rounded-3  md:h-[250px] h-[220px] ani'>
                                <img src= {html52Image} alt="" className='img-fluid' />
                                <h3 className='hed3 text-[#3b7fbf]'>Responsive Design</h3>
                                <p className='para'>Ensuring your website looks
                                    and functions seamlessly
                                    across various devices and
                                    screen sizes.</p>
                            </div>
                            <div className='bg-[#ffff]  w-1/2 p-3 rounded-3  md:h-[250px] h-[220px] ani'>
                                <img src= {html51Image} alt="" className='img-fluid' />
                                <h3 className='hed3 text-[#3b7fbf]'>CSS Animations</h3>
                                <p className='para'>Enhancing user engagement
                                    with CSS animations that
                                    bring your website to life.</p>
                            </div>
                        </div>

                    </div>

                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center py-5 my-5 bg-[#59a0e333]'>
                <h2 className='hed2 text-[#3b7fbf] text-center'>The Advantages of HTML & CSS Frameworks</h2>


                <Col md={10} className='d-md-flex justify-content-center align-items-center gap-5'>
                    <div className='html-section2'>
                        <img src= {html6_3Image} alt="" className='img-fluid' />
                        <h2 className='hed3'>Bootstrap</h2>
                        <p className='para'>Creating responsive and
                            mobile-first websites with ease
                            using Bootstrap's powerful
                            framework.</p>
                    </div>
                    <div className='html-section2'>
                        <img src= {html6_2Image} alt="" className='img-fluid' />
                        <h2 className='hed3'>Foundation</h2>
                        <p className='para'>Leveraging Foundation's
                            flexible grid system and
                            customizable UI components
                            for modern web design.</p>
                    </div>
                    <div className='html-section2'>
                        <img src= {html6_1Image} alt="" className='img-fluid' />
                        <h2 className='hed3'>Bulma</h2>
                        <p className='para'>Utilizing Bulma's lightweight
                            CSS framework for clean and
                            minimalist website designs.</p>
                    </div>
                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center py-4'>
                <Col md={10}>
                    <div>
                        <h3 className='hed2 text-center'>Our HTML & CSS Framework Development Methodology</h3>
                        <p className='para text-center'>Trust your HTML & CSS projects to our team of experienced developers, who combine technical expertise with creative vision to deliver bespoke solutions tailored to your business needs.</p>
                    </div>
                    <img src= {Html6} alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'
                style={{ background: "linear-gradient(to bottom, #3b7fbf, #4ECFFF)" }}>
                <Col md={10}>
                    <h3 className='hed2 text-center text-white' >Features of CakePHP Framework</h3>


                    <div className='d-md-flex  justify-content-center align-items-center gap-2 p-3'>
                        <div className='html-section2 my-3'>
                            <h3 className='hed3 pt-2 text-center' style={{ color: "#3b7fbf" }}>Reusable Codes</h3>
                            <p className='para  text-center pt-2' >Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem
                                Ipsum is simply dummy text
                                Lorem Ipsum is simply dummy
                                text of the printing and text.</p>
                        </div>
                        <div className='html-section2'>
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>MVC Build</h3>
                            <p className='para text-center  pt-2'>Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem
                                Ipsum is simply dummy text
                                Lorem Ipsum is simply dummy
                                text of the printing and text.</p>
                        </div>
                        <div className='html-section2'>
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>Database Management</h3>
                            <p className='para text-center  pt-2'>Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem
                                Ipsum is simply dummy text
                                Lorem Ipsum is simply dummy
                                text of the printing and text.</p>
                        </div>
                    </div>
                    <div className='d-md-flex  d-none justify-content-center align-items-center gap-2 p-3'>
                        <div className='html-section2'>
                            <h3 className='hed3 pt-2' style={{ color: "#3b7fbf" }}>Hassle Free System</h3>
                            <p className='para text-center pt-2' >Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem
                                Ipsum is simply dummy text
                                Lorem Ipsum is simply dummy
                                text of the printing and text.</p>
                        </div>
                        <div className='html-section2'>
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>Free Usage</h3>
                            <p className='para text-center pt-2'>Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem
                                Ipsum is simply dummy text
                                Lorem Ipsum is simply dummy
                                text of the printing and text.</p>
                        </div>
                        <div className='html-section2'>
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>No Download</h3>
                            <p className='para text-center pt-2'>Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem
                                Ipsum is simply dummy text
                                Lorem Ipsum is simply dummy
                                text of the printing and text.</p>
                        </div>
                    </div>






                </Col>

            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col md={10} className='d-flex justify-content-center align-items-center flex-col'>
                    <div className='pt-3'>
                        <h3 className='hed2  text-center'>What makes  us different</h3>
                    </div>
                    <div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='htmlSection1 d-md-flex d-none'>
                                <img src={html7_6Image} alt="" className='img-fluid  w-20' />
                                <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }}>Speedy Delivery</h3>
                            </div>
                            <div className='htmlSection1'>
                                <img src={ html7_5Image} alt="" className='img-fluid  w-20' />

                                <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }}>
                                    Agile Development

                                </h3>
                            </div>
                            <div className='htmlSection1'>
                                <img src= {html7_4Image} alt="" className='img-fluid w-20' />
                                <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }}>Skilled Developers</h3>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='htmlSection1 d-md-flex d-none'>
                                <img src= {html7_1Image} alt="" className='img-fluid w-20 ' />
                                <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }}>Competitive Pricing</h3>
                            </div>
                            <div className='htmlSection1'>
                                <img src={html7_2Image} alt="" className='img-fluid w-20 ' />
                                <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }}>Active Support</h3>
                            </div>
                            <div className='htmlSection1'>
                                <img src= {html7_3Image} alt="" className='img-fluid w-20' />
                                <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }}>Global Clientele</h3>
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-5 py-4 bg-[#5aa1e333]'>
                <Col md={10}>
                    <div>
                        <h2 className='hed2 text-center py-3'>Looking for Smothing Else</h2>

                    </div>
                    <div>
                        <div className='d-flex justify-content-center align-items-center gap-md-4 gap-sm-0'>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8 cursor-pointer bg-white' onClick={() => navigate('/php')}>
                                <img src= {codiImage} alt="" className='img-fluid' />
                                <h3 className='hed3  fs-6 fs-md-6  text-center' style={{ color: "#3b7fbf" }}>Php Website</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8 cursor-pointer bg-white' onClick={() => navigate('/CodeIgniter')}>
                                <img src= {php5Image} alt="" className='img-fluid flex items-center' />
                                <h3 className='hed3 fs-6 fs-md-6 text-center pt-3' style={{ color: "#3b7fbf" }}>CodeIgniter
                                    Website</h3>
                            </div>
                            <div className='d-md-flex d-none flex-column justify-content-center align-items-center Laravelsection8 bg-white'>
                                <img src={php4Image} alt="" className='img-fluid ' />
                                <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }}>Prestashop</h3>
                            </div>

                            <div className='d-md-flex d-none  flex-column justify-content-center align-items-center Laravelsection8 bg-white '>
                                <img src={php7Image} alt="" className='img-fluid' />
                                <h3 className='hed3 fs-6 fs-md-6  text-center pt-3' style={{ color: "#3b7fbf" }}>React js
                                    Website</h3>
                            </div>
                            <div className='d-md-flex d-none flex-column justify-content-center align-items-center Laravelsection8 bg-white'>
                                <img src={lar8_11Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6  fs-md-6  text-center pt-3' style={{ color: "#3b7fbf" }}>Angular js
                                    Website</h3>
                            </div>

                        </div>
                        <div className='d-md-flex d-none justify-content-center align-items-center gap-4 '>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8 cursor-pointer bg-white' onClick={() => navigate('/rubyRails')}>
                                <img src={html51Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 text-center ' style={{ color: "#3b7fbf" }} >Ruby on Rails</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8 cursor-pointer bg-white'>
                                <img src= {lar8_8Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }} onClick={() => navigate('/laraveldevlopment')}>Laravel
                                </h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8 cusrsor-pointer bg-white' onClick={() => navigate('/shopify')}>
                                <img src={shopify7Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 text-center pt-2 ' style={{ color: "#3b7fbf" }}>Shopify</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8 cursor-pointer bg-white' onClick={() => navigate('/openKart')}>
                                <img src= {php3Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 text-center pt-2' style={{ color: "#3b7fbf" }}>Openkart</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8 cursor-pointer bg-white' onClick={() => navigate('/woCommerce')}>
                                <img src= {php2Image} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 text-center pt-2' style={{ color: "#3b7fbf" }}>Woocommerce</h3>
                            </div>

                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-md-4 gap-sm-4 '>

                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8 cursor-pointer bg-white'>
                                <img src= {php6Image} alt="" className='img-fluid flex items-center w-50' />
                                <h3 className='hed3 fs-6 fs-md-6 text-center pt-3' style={{ color: "#3b7fbf" }}>Magento
                                    Website</h3>
                            </div>




                        </div>


                    </div>
                </Col>
            </Row>
            <Projects2 titleProjects="Top Web Development Projects"/>
            <Blog title="Blogs" />






        </>
    )
}