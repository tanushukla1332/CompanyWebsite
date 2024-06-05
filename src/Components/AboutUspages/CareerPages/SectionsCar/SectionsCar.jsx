
import { Row, Col, Modal } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import '../SectionsCar/SectionCar.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Blog from '../../../Blog/Blog2';

import Projects2 from '../../Projects/Projects2';
import car2img from '../../../../../public/Image/car-2.png';
import car3img from '../../../../../public/Image/car-3.png';
import car4img from '../../../../../public/Image/car-4.png';
import car5_1_img from '../../../../../public/Image/car-5 (1).png';
import car5_2_img from '../../../../../public/Image/car-5 (2).png';
import car5_3_img from '../../../../../public/Image/car-5 (3).png';
import car6img from '../../../../../public/Image/car-6.png';
import car7_1_img from '../../../../../public/Image/car-7 (1).jpg';
import car7_2_img from '../../../../../public/Image/car-7 (2).jpg';
import car7_3_img from '../../../../../public/Image/car-7 (3).jpg';


export default function CarSection() {
    return (
        <>
            <Row className='justify-content-center align-items-center'>
                <Col md={10}>
                        <h2 className='hed2 text-center pb-3'>What’s Inside</h2>
                        <div className='d-md-flex gap-5'>
                        <div className='sec2-txt mt-4 mt-md-0 p-2'>
                            <div className='flex items-center justify-center'>
                                <img src= {car2img} alt="" className='img-fluid' style={{ backgroundColor: "#3B7FBF", borderRadius: "50%"}} />
                            </div>
                            <h3 className='text-center font-semibold  text-sm  md:text-2xl pt-2'>Growth Centric Culture</h3>
                            <p  className='text-sm font-[470] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and a type specimen book.</p>
                        </div>
                        <div className='sec2-txt mt-4 mt-md-0 p-2'>
                            <div className='flex items-center justify-center'>
                                <img src= {car3img} alt="" style={{ backgroundColor: "#ffff", borderRadius: "50%",border:"1px solid #3b7fbf" }} className='img-fluid' />
                            </div>
                            <h3 className='text-center font-semibold  text-sm  md:text-2xl'>Work-Life Balance</h3>
                            <p className='text-sm font-[470] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and a type specimen book.</p>
                        </div>
                        <div className='sec2-txt mt-4 mt-md-0 p-2'>
                            <div className='flex items-center justify-center'>
                                <img src= {car4img} alt="" style={{ backgroundColor: "#3B7FBF", borderRadius: "50%"}} className='img-fluid' />
                            </div>
                            <h3 className='text-center font-semibold  text-sm  md:text-2xl'>Boredom Not-Allowed</h3>
                            <p className='text-sm font-[470] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and a type specimen book.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center  py-5'>
                <Col md={10}>
                   
                        <h2 className='hed2 text-center pb-3' >What we Value</h2>
                    
                    <div>
                        <div className='d-md-flex gap-4 '>
                            <div className='sec3-txt mt-4 mt-md-0 p-2'>
                               <div className='flex items-center justify-center'>
                               <img src= {car5_3_img} alt="" style={{ backgroundColor: "#3B7FBF", borderRadius: "50%"}} />
                               </div>
                                <h3 className='text-center font-semibold  text-sm  md:text-2xl'>Creativity</h3>
                                <p className='text-sm font-[470] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. LoremIpsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type anda type specimen book.</p>
                            </div>
                            <div className='sec3-txt  mt-4 mt-md-0 p-2'>
                             <div className='flex items-center justify-center'>
                             <img src= {car5_2_img} alt="" style={{ borderRadius: "50%",  backgroundColor: "#FFFF" }} />
                             </div>
                                <h3 className='text-center font-semibold  text-sm  md:text-2xl'>Dedication</h3>
                                <p className='text-sm font-[470] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. LoremIpsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type anda type specimen book.</p>
                            </div>
                        </div>
                        <div className='d-md-flex gap-4'>
                            <div className='sec3-txt  mt-4 mt-md-4 p-2'>
                              <div className='flex items-center justify-center'>
                              <img src= {car6img} alt="" style={{ backgroundColor: "#3B7FBF", borderRadius: "50%" }} />
                              </div>
                                <h3 className='text-center font-semibold  text-sm  md:text-2xl'>Innovation</h3>
                                <p className='text-sm font-[470] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. LoremIpsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type anda type specimen book.</p>
                            </div>
                            <div className='sec3-txt  mt-4 mt-md-4 p-2'>
                             <div className='flex items-center justify-center'>
                             <img src ={car5_1_img} alt="" style={{ backgroundColor: "#3B7FBF", borderRadius: "50%" }} />
                             </div>
                                <h3 className='text-center font-semibold text-sm  md:text-2xl'>Stepping-up</h3>
                                <p className='text-sm font-[470] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. LoremIpsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type anda type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
            <h2 className='text-center pb-3 hed2'>Openings</h2>
                <Col md={10}>
                    <Accordion defaultActiveKey="0" className='main-accrodinstart'>
                        <Accordion.Item eventKey='0' className='main-accrodinstartItem  my-3'>
                            <Accordion.Header className='headersection'>
                                <div className='d-md-flex justify-content-center align-items-center faqheaderstartgap gap-[570px]'>
                                <h3 className='text-[22px] font-[600]'>Digital Marketing Intern</h3>
                                    <p className='text-[#3b7fbf] '>Gurugram</p>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            <h3 className='hed3 text-left'>Digital Marketing Intern</h3>
                            <p className='para'>Experience- 5 Years</p>
                            <p className='para'>Preferred- e-COmmerce/ Shopify/ Magento/ Big Commerce Preferred</p>
                            <p className='para'>Qualification- Bachelor’s degree in Marketing, Communications, or a related field.</p>
                            <div>
                            <ul className='para'>
                            <li className='d-flex align-itmes-center py-2'><MdKeyboardDoubleArrowRight />Minimum of 5 years of proven experience as an SEO Specialist.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />In-depth knowledge of SEO tools, Google Analytics, Search Console, GMT, and industry trends.</li>
                            <li className='d-flex align-itmes-center py-2'><MdKeyboardDoubleArrowRight />Proficiency in implementing on-page and off-page SEO best practices.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Strong analytical and problem-solving skills.</li>
                            <li className='d-flex align-itmes-center py-2'><MdKeyboardDoubleArrowRight />Excellent communication and collaboration skills.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Ability to adapt to evolving SEO algorithms and industry changes</li>
                            </ul>
                            </div>
                        
                            </Accordion.Body>

                        </Accordion.Item>
                        <Accordion.Item eventKey='1' className='main-accrodinstartItem my-2'>
                            <Accordion.Header className='headersection'>
                                <div className='d-md-flex justify-content-center align-items-center faqheaderstartgap2 gap-[620px]'>
                                    <h3 className='text-[22px] font-[600]'>Web Designer Intern</h3>
                                    <p className=' text-[#3b7fbf] para'>Delhi</p>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            <h3 className='hed3 text-left'>Digital Marketing Intern</h3>
                            <p className='para'>Experience- 5 Years</p>
                            <p className='para'>Preferred- e-COmmerce/ Shopify/ Magento/ Big Commerce Preferred</p>
                            <p className='para'>Qualification- Bachelor’s degree in Marketing, Communications, or a related field.</p>
                            <div>
                            <ul className='para'>
                            <li className='d-flex align-itmes-center py-2'><MdKeyboardDoubleArrowRight />Minimum of 5 years of proven experience as an SEO Specialist.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />In-depth knowledge of SEO tools, Google Analytics, Search Console, GMT, and industry trends.</li>
                            <li className='d-flex align-itmes-center py-2'><MdKeyboardDoubleArrowRight />Proficiency in implementing on-page and off-page SEO best practices.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Strong analytical and problem-solving skills.</li>
                            <li className='d-flex align-itmes-center py-2'><MdKeyboardDoubleArrowRight />Excellent communication and collaboration skills.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Ability to adapt to evolving SEO algorithms and industry changes</li>
                            </ul>
                            </div>
                      
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2' className='main-accrodinstartItem my-2'>
                        <Accordion.Header className='headersection'>
                            <div className='d-md-flex justify-content-center align-items-center faqheaderstartgap gap-[590px]'>
                                <h3 className='text-[22px] font-[600]'>Software Devlopments</h3>
                                <p className='text-[#3b7fbf] para'>Mumbai</p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <h3 className='hed3 text-left'>Digital Marketing Intern</h3>
                        <p className='para'>Experience- 5 Years</p>
                        <p className='para'>Preferred- e-COmmerce/ Shopify/ Magento/ Big Commerce Preferred</p>
                        <p className='para'>Qualification- Bachelor’s degree in Marketing, Communications, or a related field.</p>
                        <div>
                        <ul className='para'>
                        <li className='d-flex align-itmes-center py-2'><MdKeyboardDoubleArrowRight />Minimum of 5 years of proven experience as an SEO Specialist.</li>
                        <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />In-depth knowledge of SEO tools, Google Analytics, Search Console, GMT, and industry trends.</li>
                        <li className='d-flex align-itmes-center py-2'><MdKeyboardDoubleArrowRight />Proficiency in implementing on-page and off-page SEO best practices.</li>
                        <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Strong analytical and problem-solving skills.</li>
                        <li className='d-flex align-itmes-center py-2'><MdKeyboardDoubleArrowRight />Excellent communication and collaboration skills.</li>
                        <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Ability to adapt to evolving SEO algorithms and industry changes</li>
                        </ul>
                        </div>
                   
                        </Accordion.Body>
                        
                    </Accordion.Item>
                    </Accordion>
        

                </Col>

            </Row>
            <Row className=' d-flex justify-content-center align-items-center py-5'>
            <div className='CarLastText'>
            <h2 className='hed2'>Life at Razobyte</h2>
            </div>
            <Col md={10}>
            <div className='d-md-flex gap-4 allimages d-flex align-items-center justify-content-center'>
            <div className='mt-3'> <img src= {car7_2_img} alt=""  className='img-fluid  '  /></div>
            <div className='mt-3'><img src= {car7_1_img} alt=""  className='img-fluid'/></div>
            <div className='mt-3'><img src= {car7_3_img} alt=""  className='img-fluid  ' /></div>
           
            
       
            </div>
       

            </Col>
            </Row>
            <Projects2 titleProjects="Top Web Design Projects"/>
            <Blog title="Blogs"/>


        </>
    )
}