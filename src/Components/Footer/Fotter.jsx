import { Row, Col } from 'react-bootstrap';
import '../Footer/Footer.css';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router';
import FotterImg from '../../../public/Image/LogoRazobyte.png';
import GoogImg from '../../../public/Image/google 1.png';
import RatingImg from '../../../public/Image/rating 1.png';
import soPartnerImg from '../../../public/Image/social 1.png';
import PrtnerImg from '../../../public/Image/logo-footer (1).png';
import Prtner1Img from '../../../public/Image/logo-footer (1).png';
import Prtner2Img from '../../../public/Image/logo-footer (1).png';
import Prtner3Img from '../../../public/Image/logo-footer (1).png';
import instrlogo from '../../../public/Image/instagram (1) 1.png';
import fbLogo from '../../../public/Image/FB logo final.png';
import linkedin from '../../../public/Image/LinkedIn Logo final.png';
import Twitter from '../../../public/Image/Twitter_new_X_logo Final.png';




export default function Footer() {
  const navigate=useNavigate()
  return (
    <>
      <Row className="justify-content-center  align-items-center px-0 bgsection pt-3">
        <Col md={5} className="d-md-flex align-items-center justify-content-center">
          <div>
            <img src={FotterImg} alt="" className="img-fluid"  style={{height:"80px",width:"268px"}}/>
            <p className="text-light pt-3 para">Your trusted partner for comprehensive IT and digital solutions.
              With a passion for technology and a dedication to excellence,
              we empower businesses to thrive in the digital age.</p>
            <button className="fsbtn" onClick={()=>navigate('/contact')}>Get in Touch</button>
          </div>
        </Col>

        <Col md={5} style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.493)' }} className='pt-3' >
          <div className='d-flex align-items-center bg-[#ffffff73] px-3 h-[100px]'>
            <div>
              <img src={GoogImg} alt="" className="img-fluid" />
            </div>
            <div className="Rating">
              <img src={RatingImg} alt="" style={{ marginBottom: '0px' }} />
              <p className=" text-black para">Google Rating</p>
            </div>
            <div className=" Border px-2">
              <div className='partner '>
                <img src={soPartnerImg} alt="" className="img-fluid pt-1 "  />
                <p className="text-black para pt-[11px]">partner</p>
              </div>
            </div>
            <div className='Fb d-none '>
              <img src="Image/Group 568.png" alt="" className="img-fluid"  /> </div>
          </div>
          <div className='d-md-flex align-items-center  d-none pt-3 logobrand'>
            <img src={PrtnerImg} alt="" className='img-fluid ' />
            <img src= {Prtner1Img} alt="" className='img-fluid' />
            <img src={Prtner2Img} alt="" className='img-fluid ' />
            <img src={Prtner3Img} alt="" className='img-fluid ' />
          </div>
        </Col>
      </Row>
      <Row className="bgsection justify-content-center align-items-center">
        <Col md ={10} >
        <h3 className="Companytext3 text-light hed3">
        <span className="text-light hed1 text-white">C</span>ompany</h3>
          <ul className="d-flex para text-white justify-start  items-stretch link  md:ml-[100px]  ">
            <li onClick={()=>navigate('/')}>Home</li>
            <li onClick={()=>navigate('/about')}>About us</li>
            <li onClick={()=>navigate('/services')}>Services</li>
            <li onClick={()=>navigate('/portfolio')}>Portfolio</li>
            <li  onClick={()=>navigate('/blogmain')}>Blogs</li>
            <li onClick={()=>navigate('/career')}>Careers</li>
            <li onClick={()=>navigate('/contact')}>Reach us</li>
          </ul>

        </Col>
      </Row>
      {/* Services section */}
      <Row className="bgsection justify-content-center align-items-center ">
        <Col md={10} >
          <h3 className="Companytext3 text-light hed3 mt-[-20px]">
          <span className="text-light hed1">S</span>ervices</h3>
          <div className='d-flex justify-start md:ml-[100px]  items-stretch'>
           <div className='d-md-flex  justify-center'>
           <div className="items-center justify-center  items-stretch">
           <ul className='para text-white link'>
             <li className="hed3 fw-bold text-white"> Design</li>
             <li onClick={()=>navigate('ui')}>UI/UX Design</li>
             <li>Website Design</li>
             <li className=" pt-2 text-white hed3 fw-bold">Ecommerce
             </li>
             <li onClick={()=>navigate('/shopify')}>Shopify</li>
             <li>OpenKart</li>
             <li onClick={()=>navigate('/woCommerce')}>WooCommerce</li>
             <li>Magneto</li>
             <li>PrestaShop</li>
           </ul>
         </div>
         <div className="flex justify-center  items-stretch">
           <ul className='para text-white link'>
             <li className=" hed3 text-white fw-bold text-white">Development
             </li>
             <li onClick={()=>navigate('/development')}>Webiste Development</li>
             <li  onClick={()=>navigate('/codeIgniter')}>CodeIgniter Website</li>
             <li  onClick={()=>navigate('/php')}>Php Website</li>
             <li  onClick={()=>navigate('/htmlPage')}>Html & Css Website</li>
             <li  onClick={()=>navigate('/laraveldevlopment')}>Laravel Website</li>
             <li>React js Website</li>
           <li  onClick={()=>navigate('/rubyRails')}>Ruby on Rails</li>
           <li  onClick={()=>navigate('/eCommerce')}>E-Commerce Website</li>

           </ul>
         </div>
           </div>
           <div className='d-md-flex  justify-center  items-stretch'>
           <div className="flex items-center justify-center  items-stretch">
           <ul className='para text-white link'>
             <li className="text-white hed3 fw-bold">Digital Marketing</li>
             <li onClick={()=>navigate('/seo')}>Search Enginee Optimization</li>
             <li onClick={()=>navigate('/sem')}> Search Enginee Marketing</li>
             <li onClick={()=>navigate('/socialMediaOpt')}>Social Media Optimization </li>
             <li onClick={()=>navigate('/socialMediaMarketing')}>social Media Marketing</li>
             <li onClick={()=>navigate('/email')}>Email Maketing</li>
             <li  className="pt-2 text-white hed3 fw-bold">Mobile Applications</li>
             <li onClick={()=>navigate('/android')}>Android App</li> 
             <li onClick={()=>navigate('/ios')}>Ios App</li>


           </ul>
         </div>
         <div className="flex items-center justify-center  items-stretch ipad">
           <ul className='para text-white link'>
             <li className="hed3 fw-bold  text-white  ">Maintenace & Support</li>
             <li>Website Maintenace </li>
             <li>Mobile App Maintenace</li>
             <li>Domain & Hosting Maintenace</li>
             <li>Payment Gateway</li>

             <li className=" pt-2 hed3 fw-bold text-white d-md-flex d-none">Game Development</li>
             <li className='d-md-flex d-none'>2D</li>
             <li className='d-md-flex d-none'>3D</li>
             <li className='d-md-flex d-none'>Meta Versa</li>
           
           </ul>
         </div>
           </div>
         
           
           
          </div>
   
        </Col>


      </Row>
      {/* Adress section */}
      <Row  className=' bgsection justify-content-center align-items-center'>
      <Col md={10}>
      <h3 className="Companytext2 text-light hed3">
      <span className="text-light hed1">G</span>ET IN TOUCH</h3>
      <div className='flex justify-center md:ml-[20px]'>
      <div className='col-md-5 flex flex-col justify-center'>
              <h3 className="text-light hed3"><span className="text-light hed1" style={{ opacity: '0.6' }}>G</span>urugram
                  </h3>
                <p className='text-white para'>Unit 337 B, Tower A, Spaze I-Tech Park,  Sector 49, Sohna Road, Gurugram 1220018 Haryana
                </p>
                <p className='text-white para'>Phone :+91-01244084508 </p>
                <p className='text-white para'> Email : contact-us@razobyte.com</p>
                <p className='text-white para'>Monday - Saturday (24 Hours)</p>
                </div>
                <div className='col-md-5 flex flex-col justify-center'>
                <h3 className="text-light hed3"><span className="text-light hed1" style={{ opacity: '0.6' }}>A</span>hemdabad
                    </h3>
                  <p className='text-white para'>C Siddhi Vinayak Tower, Sarkhej
                  Gandhinagar Hwy, Near DCP Office, Ahmedabad, Gujarat 380051
                  </p>
                  <p className='text-white para'>Phone :+91-01244084508 </p>
                  <p className='text-white para'> Email : contact-us@razobyte.com</p>
                  <p className='text-white para'>Monday - Saturday (24 Hours)</p>
                  </div>
      </div>
      </Col>
      </Row>
    
      <Row className="bgsection justify-content-center align-items-center ">
        <Col  md={10}>
          <div className="d-flex justify-content-center icon my-3" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.493)', borderTop: '1px solid rgba(255, 255, 255, 0.493)' }}>
          
          <a href="https://www.instagram.com/razobyte" target="_blank" rel="noopener noreferrer">
            <img src={instrlogo} alt="Instagram" className="img-fluid" />
          </a>
          <a href="https://www.facebook.com/razobyte" target="_blank" rel="noopener noreferrer">
            <img src={fbLogo} alt="Facebook" className="img-fluid" />
          </a>
          <a href="https://www.linkedin.com/company/razobyte/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="img-fluid" />
          </a>
          <a href="https://twitter.com/razobyte" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" className="img-fluid" />
          </a>
          </div>
        </Col>
      </Row>
      <Row className="bgsection justify-content-center align-items-center">
        <Col md={10}>
          <div className='d-sm-flex  justify-content-start align-items-center text-light last gap-3 
          md:ml-[100px]'>
          <p>© COPYRIGHT 2023 RAZOBYTE SOFTTECH. ALL RIGHTS RESERVED.</p>
          <p>Privacy Policy</p>
          <p className='d-flex align-items-center gap-1'><a href="mailto:razobyte.com" className="text-light"><CiMail  size={20}/></a>contact-us@razobyte.com</p>
          <p className='d-flex align-items-center gap-1'><a href className="text-light"><FaPhoneAlt size={20}/></a>+91-8448158188</p>
          </div>
        </Col>
      </Row>


    </>

  )
}