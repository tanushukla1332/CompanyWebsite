import { useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';


export default function ModalExample() {
    const form = useRef();
    const [show, setShow] = useState(false);
    const [submittedForm, setSubmittedForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        companyWebsite: '',
        services: '',
        projectDescription: ''
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(true);
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClose = () => {
        setShow(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            companyWebsite: '',
            services: '',
            projectDescription: ''
        });
    };

    const validateName = () => {
        return formData.name.trim() !== '';
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(formData.email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateName() || !validateEmail()) {
            return;
        }

        const serviceId = "service_50ae7vg";
        const templateId = "template_bj7dgiq";
        const userId = "nO4dZXuXXoaW29Bjb";

        emailjs
            .send(serviceId, templateId, formData, userId)
            .then((response) => {
                alert("Success", "Email Successfully Sent", "success");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    companyWebsite: '',
                    services: '',
                    projectDescription: ''
                });
                setSubmittedForm(true);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert('Error sending email',error)
            });
    };

    return (
        <>
            {show && !submittedForm && (
                <Modal show={show} onHide={handleClose} centered className='d-md-flex d-none'>
                    <Modal.Header closeButton style={{ backgroundColor: "#3b7fbf", textAlign: "center" }}>
                        <Modal.Title className='text-light d-flex justify-content-center align-items-center'>
                            <h4 className='hed3 text-white'>Get In touch</h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='justify-content-center align-items-center' style={{width:"480px"}}>
                            <Form className='p-2' onSubmit={handleSubmit} ref={form}>
                                <FormGroup>
                                    <FormControl
                                        type='text'
                                        placeholder='Name*'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
                                    <FormControl
                                        type='email'
                                        placeholder='Email*'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
                                    <FormControl
                                        type='number'
                                        placeholder='Phone*'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
                                    <FormControl
                                        type='text'
                                        placeholder='Company*'
                                        name='company'
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
                                    <FormControl
                                        type='text'
                                        placeholder='Company Website*'
                                        name='companyWebsite'
                                        value={formData.companyWebsite}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
                                    <FormControl
                                        as='select'
                                        placeholder='Services*'
                                        name='services'
                                        defaultValue={formData.services}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value=''>Services</option>
                                        <option value='Development'>Development</option>
                                        <option value='Design'>Design</option>
                                        <option value='Marketing'>Marketing</option>
                                        <option value='Game Development'>Game Development</option>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup className='d-flex justify-content-center align-items-center py-3'>
                                    <FormControl
                                        type='text'
                                        placeholder='Describe your project *'
                                        name='projectDescription'
                                        value={formData.projectDescription}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>
                                <div className='w-100 d-flex justify-content-center align-items-center'>
                                    <Button type="submit" variant='outline-dark' className='btnsubmit'>
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
}
