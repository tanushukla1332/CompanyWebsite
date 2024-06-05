import {Row,Col,Form,FormGroup,FormControl,FormLabel,FormCheck,Button} from 'react-bootstrap'

export default function Contact() {

    return (
        <Row style={{backgroundColor:"#FFFF"}}
         className='px-0 justify-content-center  align-items-center gap-5 py-5'
         >
         
         <div>
         <h2 className=' hed2 text-center'>Let's Talk To Our Experts</h2>
         <p className='subheading-sections'>Take the first step towards success</p>
         </div>
        <Col md={5} >
            <div className='justify-content-center align-items-center'>
                <Form className='Form p-4'
                >
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl type='text' placeholder='Enter your name' required className='form-control-main-page' />
                    </FormGroup>
                    <FormGroup >
                        <FormLabel>Email Adress</FormLabel>
                        <FormControl type='email' placeholder='Enter your email' required  className='form-control-main-page' />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Phone</FormLabel>
                        <FormControl type='number' placeholder='Enter your number' required  className='form-control-main-page'/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Project</FormLabel>
                        <FormControl as='select' placeholder='Project type' required  className='form-control-main-page'>
                            <option value=''>Project type</option>
                            <option value=''>SEO</option>
                            <option value=''>SMO</option>
                            <option value=''>SEM PPC</option>
                            <option value=''>Mobile app developement</option>
                            <option value=''>E Commerece Website</option>
                            <option value=''>Other</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId='formBasicCheckbox'>
                        <FormCheck type="checkbox" label="Remember Me " className='form-check-mian-page'>
                        </FormCheck>
                    </FormGroup>
                    <div className='w-100 pt-4 d-flex justify-content-center align-items-center cursor-pointer'>
                        <Button type="submit" variant='outline-dark' className='btnsubmit'
                            style={{ width: "80%" }}>Submit</Button>
                     
                    </div>  
                    <p className='para text-center'>or</p>                  
                      <div className='flex justify-center align-items-center cursor-pointer gap-3'>
                      <img src="Image/whatsap.png" alt="" className='img-fluid w-10 ' />
                      <img src="Image/msg1 (1).png" alt="" className='img-fluid w-10' />
                      <img src="Image/msg1 (2).png" alt="" className='img-fluid w-10' />
                      <p className='para text-[#3b7fbf] text-center flex items-center pt-3 cursor-pointer'>8448158188</p>
                      </div>
           
                </Form>
            </div>
        </Col>
        <Col md={5} className='d-md-flex' 
        >
          <div  className='d-flex  flex-column  justify-content-center align-items-center'>
          <div className='d-flex justify-content-center align-items-center'>
          <img src="/Image/163mbj 1.png" alt="" className='img-fluid'/>
          </div>
          <div style={{backgroundImage:"url('Image/Rectangle 211 (1).png')",
          backgroundRepeat:"no-repeat",backgroundSize:"155px 105px",backgroundPosition:"center"}} 
          className='pt-5'>
         <div className='d-flex justify-content-center align-items-center'>
          <img src="/Image/prtn1 (4).png" alt="" className='img-fluid w-50'/>
          <img src="Image/prtn1 (1).png" alt="" className='img-fluid w-50'/>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
          <img src="/Image/prtn1 (3).png" alt="" className='img-fluid w-50' />
          <img src="Image/prtn1 (2).png" alt="" className='img-fluid w-50' />
          </div>
          </div>
         
          </div>
    
           </Col>
        <Col md={5} className='d-none '>
          <div  className='d-flex  flex-column  justify-content-center align-items-center'>
          <div className='d-flex justify-content-center align-items-center'>
          <img src="/Image/163mbj 1.png" alt="" className='img-fluid' />
          </div>
          <div className='d-flex flex-sm-row contactpartnerimage pt-5'>
         <div>
          <img src="/Image/prtn1 (4).png" alt="" className='img-fluid' />
          <img src="Image/prtn1 (1).png" alt="" className='img-fluid' />
          </div>
          <div>
          <img src="/Image/prtn1 (3).png" alt="" className='img-fluid' />
          <img src="Image/prtn1 (2).png" alt="" className='img-fluid' />
          </div>
          </div>
         
          </div>
    
           </Col>
    
            
    </Row>

    
     
      
    );
}
