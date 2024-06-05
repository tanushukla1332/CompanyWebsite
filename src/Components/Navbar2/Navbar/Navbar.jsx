import { FaAngleDown, FaSearch, FaAngleUp } from "react-icons/fa";
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import ButtonE from "../Button";
import headerLogo from '../../../../public/Image/COMPANY_LOGO.png'
import designlogo from '../../../../public/Image/nav-lar-1 (3).svg'
import cartLogo from '../../../../public/Image/cart.png';
import developmentLogo from '../../../../public/Image/nav-lar-1 (2).svg';
import digitalMarketingLogo from '../../../../public/Image/nav-lar-1 (4).svg';
import GameLogo from '../../../../public/Image/nav-lar-1 (3).svg';
import Mobile from '../../../../public/Image/nav-lar-1 (5).svg';


import '../Navbar/Navbar.css';
import { useState, useEffect, useRef } from "react";
const Navbar = () => {
  const [click, setClick] = useState(false)
  const [showAboutSection, setShowAboutSection] = useState(false);
  const [showServicesSection, setShowServicesSection] = useState(false);
  const [active, setActive] = useState(false)
  const [aboutmenu, setAboutMenu] = useState(false)
  const [showsubMenuEcommerce, setsubMenuEcommerce] = useState(false)
  const [showsubMenuDevelopment, setsubMenuDevelopment] = useState(false)
  const [showsubMenuDesign, setshowsubMenuDesign] = useState(false)
  const [showsubMenuDigital, setshowsubMenuDigital] = useState(false)
  const [showsubMenuGame, setshowsubMenuGame] = useState(false)
  const [showsubMenuMaintenance, setshowsubMenuMaintenace] = useState(false)
  const [showsubMenuMobile, setshowsubMenuMobile] = useState(false)


  const toggleEcommerceMenu = () => {
    setsubMenuEcommerce(!showsubMenuEcommerce)
  }
  const toggleMobile = () => {
    setshowsubMenuMobile(!showsubMenuMobile)
  }
  const toggleMaintenace = () => {
    setshowsubMenuMaintenace(!showsubMenuMaintenance)
  }
  const toggleGame = () => {
    setshowsubMenuGame(!showsubMenuGame)
  }
  const toggleDigitalMenu = () => {
    setshowsubMenuDigital(!showsubMenuDigital)
  }
  const toggleDevelopment = () => {
    setsubMenuDevelopment(!showsubMenuDevelopment)
  }

  const togglesubMneu = () => {
    setshowsubMenuDesign(!showsubMenuDesign)
  }
  const handleAboutMenu = () => {
    setAboutMenu(!aboutmenu);
    setShowAboutSection(!aboutmenu);

    // If the Services dropdown is open, close it
    if (showServicesSection) {
      setShowServicesSection(false);
      setActive(false);
    }
  };

  const handleActive = () => {
    setActive(!active);
    setShowServicesSection(!showServicesSection);
    if (aboutmenu) {
      setAboutMenu(false);
      setShowAboutSection(false);
    }
  };
  const handleClick = () => {
    setClick(!click)
  }
  const content =

    <div className="lg:hidden z-1000 block absolute top-26 h-[90vh] w-50  right-0 bg-white backdrop-blur-lg bg-opacity-30  py-3">
      <ul className="flex flex-col gap-[25px] text-[18px] items-center ">
        <Link to='/' className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Home</li></Link>
        {/* Mega Menu Start*/}
        <div className="group">
          <div className="flex items-center">
            <Link
              className="navlinkmenutitle no-underline flex items-center disable"
              onClick={handleAboutMenu}
            >
              <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] text-[18px] navlinkmenutitle'>
                About
              </li>
            </Link>
            {!showAboutSection && (
              <IoIosArrowForward
                className="text-[#5e5e5e] cursor-pointer"
                onClick={handleAboutMenu}
                size={20}
              />
            )}
          </div>
          {showAboutSection && (
            <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-3">
              <div className="flex">
                <div className="w-96">
                  <span className="flex gap-2">
                    {showAboutSection && (
                      <IoIosArrowBack
                        className="text-[#5e5e5e]  cursor-pointer rounded-1 bg-[#3b7fbf]  text-white p-1"
                        onClick={handleAboutMenu}
                        size={20}
                      />
                    )}
                    <h6 className="text-[#3b7fbf]   font-[550] ">AboutUs</h6>
                  </span>
                  <ul className="flex flex-col">
                    <Link to="/about/about-us" className="navlinkmenutitle no-underline hover:no-underline">  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-1'>About</li> </Link>
                    <Link to="about/career" className="navlinkmenutitle no-underline hover:no-underline">  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-1'>Career</li> </Link>
                    <Link to="/about/our-clients" className="navlinkmenutitle no-underline  hover:no-underline">  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-1'>Our Clients</li> </Link>
                    {/* Add other submenu items as needed */}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Mega Menu End*/}
        {/* Mega Menu Start*/}
        <div className="group">
          <div className="flex">
            <Link
              className="navlinkmenutitle no-underline flex disable"
              onClick={handleActive}
            >
              <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] text-[18px] navlinkmenutitle'>
                Services
              </li>
            </Link>
            {!showServicesSection && (
              <IoIosArrowForward
                className="text-[#5e5e5e] cursor-pointer"
                onClick={handleActive}
                size={20}
              />
            )}
          </div>
          {showServicesSection && (
            <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-2">
              <div className="flex p-2">
                <div className="w-96">
                  <span className="flex  gap-2">
                    {showServicesSection && (
                      <IoIosArrowBack
                        className="cursor-pointer rounded-1 bg-[#3b7fbf]  text-white p-1 "
                        onClick={handleActive}
                        size={20}
                      />
                    )}
                    <h6 className="text-[#3b7fbf] hed2">Services</h6>
                  </span>
                  <div className="overflow-y-scroll h-[200px]">
                    <div className="flex py-1 gap-5 ">
                      <h6 className="hed3">Design</h6>
                      {showServicesSection && (
                        <IoIosArrowForward
                          className=" cursor-pointer text-[#5e5e5e]"
                          onClick={togglesubMneu}
                          size={20}
                        />

                      )}
                      {showsubMenuDesign && (
                        <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-3">
                          <div className="flex">
                            <div className="w-96">
                              <span className="flex  gap-2">
                                {showsubMenuDesign && (
                                  <IoIosArrowBack
                                    className="cursor-pointer rounded-1 bg-[#3b7fbf]  text-white p-1"
                                    onClick={togglesubMneu}
                                    size={20}
                                  />
                                )}
                                <h6 className="text-[#3b7fbf] hed2">Design</h6>
                              </span>
                              <ul className="d-flex flex-col">
                                <Link to="/services/design/ui/ux-design" className="navlinkmenutitle no-underline hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'> UI/UX Design</li> </Link>
                                <Link to="/" className="navlinkmenutitle no-underline  hover:no-underline" onClick={handleActive}>  
                                <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'>Web Design</li> </Link>
                                {/* Add other submenu items as needed */}
                              </ul>
                              <ButtonE name="Enquire Now" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex py-1 ">
                      <h6 className="hed3">Ecommerece</h6>
                      {!showsubMenuEcommerce && (
                        <IoIosArrowForward
                          className="text-[#5e5e5e] cursor-pointer"
                          onClick={toggleEcommerceMenu}
                          size={20}
                        />
                      )}
                      {showsubMenuEcommerce && (
                        <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-1">
                          <div className="flex p-2">
                            <div className="w-96">
                              <span className="flex gap-2">
                                {showsubMenuEcommerce && (
                                  <IoIosArrowBack
                                    className="cursor-pointer rounded-1 bg-[#3b7fbf]  text-white p-1"
                                    onClick={toggleEcommerceMenu}
                                    size={20}
                                  />
                                )}
                                <h6 className="text-[#3b7fbf]  hed2">Ecommerece</h6>
                              </span>
                              <ul className="flex  flex-col">
                                <Link to="/services/ecommerce-solutions/shopify-development" className="navlinkmenutitle no-underline hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2' > Shopify</li> </Link>
                                <Link to="services/ecommerce-solutions/opencart-development" className="navlinkmenutitle no-underline  hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'> OpenKart</li> </Link>
                                <Link to="services/ecommerce-solutions/wocommerce-development" className="navlinkmenutitle no-underline  hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'>Woocommerce</li> </Link>
                                <Link to="/" className="navlinkmenutitle no-underline  hover:no-underline" onClick={handleActive}> 
                                 <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'>Magento</li> </Link>
                                <Link to="/" className="navlinkmenutitle no-underline  hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'>Prestashop</li> </Link>
                                {/* Add other submenu items as needed */}
                              </ul>
                              <ButtonE name="Enquire Now" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex py-1">
                      <h6 className="hed3" >Development</h6>
                      {!showsubMenuDevelopment && (
                        <IoIosArrowForward
                          className="text-[#5e5e5e] cursor-pointer"
                          onClick={toggleDevelopment}
                          size={20}
                        />
                      )}
                      {showsubMenuDevelopment && (
                        <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-1 ">
                          <div className="flex p-2">
                            <div className="w-96">
                              <span className="flex gap-2 ">
                                {showsubMenuDevelopment && (
                                  <IoIosArrowBack
                                    className="cursor-pointer rounded-1 bg-[#3b7fbf]  text-white p-1"
                                    onClick={toggleDevelopment}
                                    size={20}
                                  />
                                )}
                                <h6 className="text-[#3b7fbf] hed2">Development</h6>
                              </span>
                              <div className="overflow-y-scroll h-[300px]">
                                <ul className="flex flex-col ">
                                  <Link to='/services/development/website-dvelopment' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   font-medium para text-[14px]
     hover:no-underline   py-1'  onClick={handleActive} ><li className="">Website Development</li> </Link>

                                  <Link to='/services/development/codeigniter-website-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline py-1'  onClick={handleActive}> <li className="">CodeIgniter Website</li>
                                  </Link>
                                  <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
      text-[15px] font-medium
     hover:no-underline  py-1 '  onClick={handleActive}> <li className="">Informative Websit</li> </Link>

                                  <Link to='services/development/php-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium
     hover:no-underline  py-1 '  onClick={handleActive}> <li className="">Php Development</li> </Link>

                                  <Link to='/services/development/html-css-website' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]    text-[15px] font-medium
    hover:no-underline  py-1'  onClick={handleActive}> <li className="">Html & Css Website</li></Link>

                                  <Link to='/services/development/laravel' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline  py-1'  onClick={handleActive}> <li className="">Laravel Website</li>
                                  </Link>

                                  <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline   py-1'  onClick={handleActive}> <li className="">React js Website</li> </Link>

                                  <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline   py-1'  onClick={handleActive}> <li className="">Angular js Website</li> </Link>

                                  <Link to='/services/rubyrails ' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline   py-1'  onClick={handleActive} > <li className="">Ruby on Rails</li> </Link>

                                  <Link to='/services/development/ecommerce-website-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline   py-1' onClick={handleActive} ><li className="">E-commerce Website</li></Link>

                                  <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline ' onClick={handleActive}> <li className="py-1">Payment Gateway</li> </Link>



                                </ul>
                              </div>
                              <ButtonE name="Enquire Now" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex py-1">
                      <h6 className="hed3">Digital Marketing</h6>
                      {!showsubMenuDigital && (
                        <IoIosArrowForward
                          className="text-[#5e5e5e] cursor-pointer"
                          onClick={toggleDigitalMenu}
                          size={20}
                        />

                      )}
                      {showsubMenuDigital && (
                        <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-1">
                          <div className="flex p-2">
                            <div className="w-96">
                              <span className="flex gap-2">
                                {showsubMenuDigital && (
                                  <IoIosArrowBack
                                    className="cursor-pointer rounded-1 bg-[#3b7fbf]  text-white p-1"
                                    onClick={toggleDigitalMenu}
                                    size={20}
                                  />
                                )}
                                <h6 className="text-[#3b7fbf] font-[550] ">Digital Marketing</h6>
                              </span>
                              <ul className="flex  flex-col">
                                <Link to="/services/seo-search-engine-optimization" className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   
                  text-[15px] font-medium  hover:no-underline'   onClick={handleActive} >
                                  <li className=" py-1">Search Engine Optimization</li>  </Link>

                                <Link to='/services/sem-seacrh-engine-marketing' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
                  text-[15px] font-medium hover:no-underline   '  onClick={handleActive}>
                                  <li className="py-1">Search Engine Marketing</li> </Link>

                                <Link to='/services/digital-marketing/smo/social-media-optimization' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium hover:no-underline'
                                  onClick={handleActive} > <li className="py-1">Social Media Optimization</li> </Link>
                                <Link to='/services/digital-marketing/smm/social-media-marketing' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]
                  text-[15px] font-medium hover:no-underline '  onClick={handleActive} > <li className="py-1">Social Media Marketing</li> </Link>
                                <Link to='/services/email-marketing' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]
                  text-[15px] font-medium hover:no-underline '  onClick={handleActive} > <li className="py-1 text-left">Email Marketing</li> </Link>
                              </ul>
                              <ButtonE name="Enquire Now" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex">
                      <h6 className="hed3">Game Development</h6>
                      {!showsubMenuGame && (
                        <IoIosArrowForward
                          className="text-[#5e5e5e] cursor-pointer"
                          onClick={toggleGame}
                          size={20}
                        />

                      )}
                      {showsubMenuGame && (
                        <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-1">
                          <div className="flex p-2">
                            <div className="w-96">
                              <span className="flex gap-2">
                                {showsubMenuGame && (
                                  <IoIosArrowBack
                                    className="cursor-pointer rounded-1 bg-[#3b7fbf]  text-white p-1"
                                    onClick={toggleGame}
                                    size={20}
                                  />
                                )}
                                <h6 className="text-[#3b7fbf] hed3 ">Game Development</h6>
                              </span>
                              <ul>
                                <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   
                  text-[15px] font-medium  hover:no-underline'   onClick={handleActive} > <li className="py-1">2D</li>  </Link>

                                <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
                  text-[15px] font-medium hover:no-underline   '  onClick={handleActive}> <li className="py-1">3D</li> </Link>

                                <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium hover:no-underline   ' onClick={handleActive} > <li className="py-1">Meta Versa</li> </Link>

                              </ul>
                              <ButtonE name="Enquire Now" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex">
                      <h6 className="hed3"> Maintenace Support </h6>
                      {!showsubMenuMaintenance && (
                        <IoIosArrowForward
                          className="text-[#5e5e5e] cursor-pointer"
                          onClick={toggleMaintenace}
                          size={20}
                        />

                      )}
                      {showsubMenuMaintenance && (
                        <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-1">
                          <div className="flex p-1">
                            <div className="w-96">
                              <span className="flex gap-2">
                                {showsubMenuMaintenance && (
                                  <IoIosArrowBack
                                    className="cursor-pointer rounded-1 bg-[#3b7fbf]  text-white p-1"
                                    onClick={toggleMaintenace}
                                    size={20}
                                  />
                                )}
                                <h6 className="text-[#3b7fbf] hed3">Maintenace Support</h6>
                              </span>
                              <ul className="flex items-center justify-center flex-col">
                                <Link to='/services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   
                text-[15px] font-medium  hover:no-underline'   onClick={handleActive} > <li className="py-1">
                                    Website Maintenance

                                  </li>  </Link>

                                <Link to='services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
                text-[15px] font-medium hover:no-underline'  onClick={handleActive}> <li className="py-1">Mobile App Maintenance</li> </Link>

                                <Link to='services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium hover:no-underline   ' onClick={handleActive} > <li className="py-1">Domain & Hosting Maintenance</li> </Link>

                              </ul>
                              <ButtonE name="Enquire Now" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex  py-1">
                      <h6 className="hed3">Mobile Applications</h6>
                      {!showsubMenuMobile && (
                        <IoIosArrowForward
                          className="text-[#5e5e5e] cursor-pointer"
                          onClick={toggleMobile}
                          size={20}
                        />

                      )}
                      {showsubMenuMobile && (
                        <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-1">
                          <div className="flex p-1">
                            <div className="w-96">
                              <span className="flex gap-2">
                                {showsubMenuMobile && (
                                  <IoIosArrowBack
                                    className="cursor-pointer rounded-1 bg-[#3b7fbf]  text-white p-1"
                                    onClick={toggleMobile}
                                    size={20}
                                  />
                                )}
                                <h6 className="text-[#3b7fbf] font-[550] ">Mobile Applications</h6>
                              </span>
                              <ul className="flex flex-col">
                                <Link to='services/mobile-application/android-applications-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   
              text-[15px] font-medium  hover:no-underline'   onClick={handleActive} > <li className="py-1">
                                    Android App

                                  </li>  </Link>

                                <Link to='/services/mobile-application/ios-applications-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
              text-[15px] font-medium hover:no-underline   '  onClick={handleActive}> <li className="py-1">IOS App</li> </Link>



                              </ul>
                              <ButtonE name="Enquire Now" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <ButtonE name="Enquire Now" />
                  {/* Add other submenu items as needed */}
                </div>
              </div>
            </div>
          )}
        </div>
        <Link to='/portfolio' className='no-underline 
    navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Portfolio</li>
        </Link>
        <Link to='/blogMain' className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Blogs</li></Link>
        <Link to='/contact' className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Reach us</li></Link>
      </ul>
      <ButtonE name="Enquire Now" />
    </div>
  return (
    <>
      <nav className="z-50 bg-white navmaindiv w-[100%]">
        <div className=" flex items-stretch  w-[100%] m-auto">
          <div className="flex items-center  justify-center">
            <img src={headerLogo} alt="logo" className="md:cursor-pointer" />
          </div>
          <div className="lg:flex  md-flex flex-1 items-stretch justify-center  font-normal hidden text-ipad ">
            <ul className="flex md:gap-[25px]  gap-[10px] text-[18px] items-center  mb-0">
              <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   '>
                <Link to='/' className='no-underline navlinkmenutitle'> Home</Link> </li>
              {/* Mega Menu Start*/}
              <div className="group">
                <li className="navlinkmenutitle no-underline disable">
                  <span className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[18px] navlinkmenutitle'
                    onClick={handleAboutMenu}
                    onMouseOver={handleAboutMenu}

                  >About </span>
                  {aboutmenu ? (
                    <FaAngleDown className="text-[#5e5e5e] ml-1 inline-block" onClick={handleAboutMenu} />
                  ) : (
                    <FaAngleUp className="text-[#5e5e5e] ml-1 inline-block" onClick={handleAboutMenu} />
                  )}
                </li>
                {aboutmenu ? (
                  <>
                    <div className="flex-col items-center absolute  top-[80px] py-1 px-2  border-top 
    rounded-1 shadow-lg bg-gray-100 z-20 text-black duration-300 "
                      onMouseLeave={handleAboutMenu} >
                      <div className="grid grid-cols  md:grid-cols">
                        <div className=" flex flex-col justify-center items-center">
                          <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] navlinkmenutitle hover:no-underline cursor-pointer ' onClick={handleAboutMenu}>
                            <Link to='/about/about-us' className='no-underline navlinkmenutitle hover:no-underline '>About Us</Link></li>


                        </div>

                      </div>
                      <div className="grid grid-cols  md:grid-cols">
                        <div className=" flex flex-col justify-center items-center">
                          <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>
                            <Link to='about/our-clients' className='no-underline navlinkmenutitle hover:no-underline' onClick={handleAboutMenu}>Our Clients</Link>
                          </li>

                        </div>

                      </div>
                      <div className="grid grid-cols  md:grid-cols">
                        <div className="flex flex-col justify-center items-center">
                          <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] ' >
                            <Link to='about/career' className='no-underline navlinkmenutitle hover:no-underline' onClick={handleAboutMenu}>Career</Link>
                          </li>

                        </div>

                      </div>


                    </div>
                  </>
                ) : null}


              </div>



              {/* Mega Menu End*/}


              {/* Mega Menu Start*/}
              <div className="group">
                <li className="navlinkmenutitle no-underline disable">
                  <span
                    className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] text-[18px] navlinkmenutitle'
                    onClick={handleActive}
                    onMouseOver={handleActive}
                  > Services</span>
                  {active ? (
                    <FaAngleDown className="text-[#5e5e5e] ml-1 inline-block" onClick={handleActive} />
                  ) : (
                    <FaAngleUp className="text-[#5e5e5e] ml-1 inline-block" onClick={handleActive} />
                  )}
                </li>
                {active ? (
                  <>
                    <div className="flex-col items-center absolute  top-[80px] py-2 px-2  border-top 
      rounded-1 shadow-lg
     bg-gray-100 z-20 text-black duration-300 "
                      onMouseLeave={handleActive}>
                      <div className="grid grid-cols-4 md:grid-cols-3 gap-3">
                        <div className="flex flex-col bg-[#ffff] px-1 py-2 rounded-1 inside-dev-shado-des">
                          <span className="d-flex items-center gap-[100px]">
                            <h6 className="text-[#3b7fbf]   font-[550] ">Design</h6>
                            <img src={designlogo} className="w-[50px]" />
                          </span>
                          <li>
                            <Link to='/services/ui/ux-design' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline ' onClick={handleActive}>UI/UX Design</Link>
                          </li>
                          <li>
                            <Link to='services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Website Design</Link></li>
                          <div className="flex flex-col pt-3">
                            <span className="d-flex items-center ">
                              <h6 className="text-[#3b7fbf] font-[550] ">Ecommerce Solutions</h6>
                              <img src={cartLogo} className="w-10" />
                            </span>
                            <li>

                              <Link to='services/ecommerce-solutions/shopify-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline ' onClick={handleActive}>Shopify</Link></li>
                            <li>

                              <Link to='services/ecommerce-solutions/opencart-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>OpenCart</Link></li>
                            <li>
                              <Link to='/services/ecommerce-solutions/wocommerce-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline ' onClick={handleActive}>Woocommerce</Link></li>


                            <li> <Link to='services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Magento</Link></li>
                            <li>
                              <Link to='services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Prestashop</Link> </li>
                          </div>





                        </div>
                        <div className="flex flex-col  bg-[#ffff] px-1  py-2 rounded-1 inside-dev-shado-des ">
                          <span className="d-flex items-center gap-5">
                            <h6 className="text-[#3b7fbf]  font-[550]">Development</h6>
                            <img src={developmentLogo} className="w-[50px]" />
                          </span>
                          <li>
                            <Link to='services/development/website-dvelopment' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline  '  onClick={handleActive} >Website Development</Link></li>
                          <li>

                            <Link to='services/development/codeigniter-website-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline  '  onClick={handleActive}>CodeIgniter Website
                            </Link> </li>
                          <li>
                            <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
      text-[15px] font-medium
     hover:no-underline  '  onClick={handleActive}>Informative Website</Link></li>
                          <li>
                            <Link to='services/development/php-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium
     hover:no-underline  '  onClick={handleActive}>Php Website</Link></li>
                          <li>

                            <Link to='services/development/html-css-website' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]    text-[15px] font-medium
    hover:no-underline '  onClick={handleActive}>Html & Css Website</Link></li>
                          <li>
                            <Link to='services/laravel' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline '  onClick={handleActive}>Laravel Website
                            </Link></li>
                          <li>

                            <Link to='services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline '  onClick={handleActive}> React js Website</Link></li>
                          <li>
                            <Link to='/services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline '  onClick={handleActive}> Angular js Website</Link></li>
                          <li>

                            <Link to='/services/development/ecommerce-website-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline ' onClick={handleActive} >E-commerce Website</Link> </li>
                          <li>

                            <Link to='/services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline ' onClick={handleActive}>Payment Gateway</Link> </li>




                        </div>
                        <div className="flex flex-col  bg-[#ffff] px-1  py-2 rounded-1 inside-dev-shado-des" >
                          <span className="d-flex items-center gap-4">
                            <h6 className="text-[#3b7fbf]  font-[550] ">Digital Marketing</h6>
                            <img src={digitalMarketingLogo} className="w-[50px]" />
                          </span>
                          <li>
                            <Link to="/services/digital-marketing/seo-search-engine-optimization" className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   
     text-[15px] font-medium  hover:no-underline'   onClick={handleActive} >Search Engine Optimization</Link></li>
                          <li>

                            <Link to='/services/digital-marketing/sem-seacrh-engine-marketing' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
     text-[15px] font-medium hover:no-underline   '  onClick={handleActive} >Search Engine Marketing</Link>
                          </li>
                          <li>
                            <Link to='/services/digital-marketing/smo/social-media-optimization' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium hover:no-underline   ' onClick={handleActive} >Social Media Optimization</Link> </li>
                          <li>
                            <Link to='/services/digital-marketing/smm/social-media-marketing' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]
     text-[15px] font-medium hover:no-underline '  onClick={handleActive} >Social Media Marketing</Link></li>

                          <li>
                            <Link to='/services/digital-marketing/email-marketing' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]
     text-[15px] font-medium hover:no-underline '  onClick={handleActive} >Email Marketing</Link>

                          </li>

                        </div>

                        <div className="flex flex-col bg-[#ffff] px-1 py-2 rounded-1 inside-dev-shado-des">
                          <span className="d-flex items-center gap-2">
                            <h6 className="text-[#3b7fbf] font-[550] "> Game Development</h6>
                            <img src={GameLogo} className="w-[50px]" />
                          </span>
                          <li>
                            <Link to="/services/remainpage" className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>2D</Link></li>
                          <li>
                            <Link to='services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>3D</Link></li>
                          <li>
                            <Link to='services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] 
     text-[15px] font-medium
     hover:no-underline '>Meta Verse</Link></li>


                        </div>
                        <div className="flex flex-col   bg-[#ffff] px-1 py-2  rounded-1  inside-dev-shado-des">
                          <span className="d-flex items-center gap-5">
                            <h6 className="text-[#3b7fbf]  font-[550]">Maintenace & Support</h6>
                            <img src={GameLogo} className="w-[50px]" />
                          </span>
                          <li>
                            <Link to="services/remainpage" className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Website Maintenance </Link></li>
                          <li>
                            <Link to='services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline'>Mobile App Maintenance </Link></li>
                          <li>
                            <Link to='services/remainpage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline'>Domain & Hosting Maintenance </Link></li>
                        </div>
                        <div className="flex flex-col   bg-[#ffff] p-1 rounded-1  inside-dev-shado-des">
                          <span className="d-flex items-center gap-1">
                            <h6 className="text-[#3b7fbf] font-[550]">Mobile Applications</h6>
                            <img src={Mobile} className="w-[50px]" />
                          </span>
                          <li>
                            <Link to='services/mobile-application/android-applications-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Android App </Link></li>
                          <li>
                            <Link to='/services/mobile-application/ios-applications-development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline'>IOS App</Link></li>




                        </div>

                      </div>


                    </div>

                  </>
                ) : null}
              </div>



              {/* Mega Menu End*/}

              <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>
                <Link to='/portfolio' className='no-underline 
 navlinkmenutitle '>Portfolio  </Link></li>

              <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '><Link to='/blogMain' className='no-underline navlinkmenutitle '> Blogs</Link></li>

              <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>  <Link to='/contact' className='no-underline navlinkmenutitle '> Reach us </Link></li>

              <li>
                <Link to='/contact' className='no-underline  hover:no-underline flex items-center gap-2 hover:text-[#3b7fbfbe]  cusror-pointer text-[#3b7fbf] text-[18px] font-[500] '>
                  <MdPhoneInTalk size={30} className="rounded-5 bg-[#3b7fbf]  text-white p-1" />8448158188
                </Link>
              </li>

              <Button className="btnmain">Get a Quote</Button>
            </ul>
          </div>

          <div>

            <button className="block sm:hidden "
              onClick={handleClick}>
              {click ? <GrClose size={35} className="my-3" />

                : <FiMenu size={35} className="mt-3" />}
            </button>
          </div>
        </div>
        {click && content}
      </nav>
    </>
  );
};

export default Navbar;