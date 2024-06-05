
import {Row,Col,Form,FormGroup,FormControl,FormLabel,FormCheck,Button} from 'react-bootstrap';
import { FaRegUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { HiOutlinePencil } from "react-icons/hi";
import { TiMail } from "react-icons/ti";


import '../Banner/Banner.css'

export default function Banner() {
    return (
        <>
            <Row className='banner d-sm-flex  d-none justify-content-center align-items-center
              mainrowdiv pt-5' style={{backgroundImage:"linear-gradient(to right ,#3b7fbf9d,#3b7fbf21 ),url('Image/wave (14).svg')"}}>
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                    <div className='contact-title'>
                    <div>
                    <p>Let’s build what 
                    you dreamt of, 
                    Together! 
                    Drop us a call!</p>
                    <img src="Image/Group 1111 (1).png" alt="" className='img-fluid img-below' />
                    </div>
                

    
                    </div>
                </Col>
                <Col md={6} className='d-flex justify-content-center align-items-center my-4'>
                <div className='d-flex justify-content-center align-items-center main-form-div'>
                <Form className='main-form-page p-4'
                >
                <h4>Get In touch</h4>
                <p className='py-2'>We're Here to Help - Connect with Our Team Today</p>

                <FormGroup className='d-flex justify-content-center align-items-center pt-1'>
                       <FaRegUser className='icon-form'/> <FormControl type='text' placeholder='Name' required  className='form-control-contact-page'/>
                    </FormGroup>
                    <FormGroup  className='d-flex justify-content-center align-items-center pt-3'>
                        <TiMail className='icon-form'size={22} /><FormControl type='email' placeholder='Email' required  className='form-control-contact-page'/>
                    </FormGroup>
                    <FormGroup  className='d-flex justify-content-center align-items-center pt-3'>
                        <FaPhone className='icon-form'/> <FormControl type='number' placeholder='Phone' required className='form-control-contact-page' />
                    </FormGroup>
                    <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
                 <AiFillDribbbleCircle className='icon-form'/>   <FormControl type='text' placeholder='Company' required className='form-control-contact-page' />
                </FormGroup>
                <FormGroup className='d-flex justify-content-center align-items-center pt-3'> 
                <LuBuilding2 className='icon-form'/> <FormControl type='text' placeholder='Company Website' required className='form-control-contact-page' />
            </FormGroup>
                    <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
                       <GrServices className='icon-form'/> <FormControl as='select' placeholder='Services' required className='form-control-contact-page' >
                            <option value='' selected>Services</option>
                            <option value=''>Development</option>
                            <option value=''>Design</option>
                            <option value=''>Marketing</option>
                            <option value=''>Game Development </option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
                  <HiOutlinePencil className='icon-form'/>  <FormControl type='text' placeholder='Describe your project in brief' required className='form-control-contact-page' />
                </FormGroup>
                    <FormGroup controlId='formBasicCheckbox' >
                        <FormCheck type="checkbox" label="T&C" className=' px-5 p-3'>
                        </FormCheck>
                    </FormGroup>
                    <div className='w-100  d-flex justify-content-center align-items-center'>
                        <Button type="submit" variant='outline-dark' className='btnsubmit'
                        >Submit</Button>
                    </div>

                  
                    
                </Form>
            </div>



                </Col>
            </Row>
            <Row className='d-flex d-sm-none justify-content-center align-items-center py-5' style={{backgroundColor:"#3b7fbf"}}>
            <Col md={6} className='d-flex justify-content-center align-items-center'>
                <div className='contact-title2 text-light' >
                <p>Let’s build what 
                you dreamt of, 
                Together! 
                Drop us a call!</p> 
                </div>
            </Col>
            <Col md={6} className='d-flex justify-content-center align-items-center'>
            <div className='d-flex justify-content-center align-items-center main-form-div2'>
            <Form className='p-4 main-form-page2'
            >
            <h4>Get In touch</h4>
            <p className='py-2'>We're Here to Help - Connect with Our Team Today</p>

            <FormGroup className='d-flex justify-content-center align-items-center pt-1'>
                   <FaRegUser className='icon-form2'/> <FormControl type='text' placeholder='Name' required  className='form-control-contact-page2'/>
                </FormGroup>
                <FormGroup  className='d-flex justify-content-center align-items-center pt-3'>
                    <TiMail className='icon-form2'size={22} /><FormControl type='email' placeholder='Email' required  className='form-control-contact-page2'/>
                </FormGroup>
                <FormGroup  className='d-flex justify-content-center align-items-center pt-3'>
                    <FaPhone className='icon-form2'/> <FormControl type='number' placeholder='Phone' required className='form-control-contact-page2' />
                </FormGroup>
                <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
             <AiFillDribbbleCircle className='icon-form2'/>   <FormControl type='text' placeholder='Company' required className='form-control-contact-page2' />
            </FormGroup>
            <FormGroup className='d-flex justify-content-center align-items-center pt-3'> 
            <LuBuilding2 className='icon-form2'/> <FormControl type='text' placeholder='Company Website' required className='form-control-contact-page2' />
        </FormGroup>
                <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
                   <GrServices className='icon-form2'/> <FormControl as='select' placeholder='Services' required className='form-control-contact-page2' >
                        <option value='' selected>Services</option>
                        <option value=''>Development</option>
                        <option value=''>Design</option>
                        <option value=''>Marketing</option>
                        <option value=''>Game Development </option>
                    </FormControl>
                </FormGroup>
                <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
              <HiOutlinePencil className='icon-form2'/>  <FormControl type='text' placeholder='Describe your project in brief' required className='form-control-contact-page2' />
            </FormGroup>
                <FormGroup controlId='formBasicCheckbox' >
                    <FormCheck type="checkbox" label="T&C" className=' px-5 p-3'>
                    </FormCheck>
                </FormGroup>
                <div className='w-100  d-flex justify-content-center align-items-center'>
                    <Button type="submit" variant='outline-dark' className='btnsubmit'
                    >Submit</Button>
                </div>

              
                
            </Form>
        </div>



            </Col>
        </Row>


        </>
    )
}