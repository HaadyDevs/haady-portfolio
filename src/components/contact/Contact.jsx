import React, { useRef } from 'react';
import "./contact.css";
import { HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi"
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
    const form = useRef();
    const textRef = useRef();

    const [testValue, setTestValue] = useState("");
    
    const handleChange = (e) => {

        let value = e.target.value;
        let formatted = value.replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        setTestValue(formatted)
        console.log("Changed Value "+formatted);
    }
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s53x8mc', 'template_fwq8n7v', form.current, 'cXginQ40keRVEt1YV')
        e.target.reset();
    };

    function fun(num) {
        return num.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
    }
  
    return (
    <section className="contact section" id="contact">
        <h2 className="section__title">How to connect?</h2>
        <span className="section__subtitle">Reach out to me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
                
                <div className="contact__info">
                    <div className="contact__card">
                        <HiOutlineMail className="contact__card-icon" />
                        
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">abdulhaady07@gmail.com</span>
                        
                        <a href="mailto:abdulhaady07@gmail.com" className="contact__button">
                            Write Me{" "} 
                            <HiOutlineArrowSmRight className="contact__button-icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Send me an Owl</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="name" className="contact__form-input" placeholder="Type your name" value={testValue} onChange={handleChange}/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="email" name="email" className="contact__form-input" placeholder="Type your email" />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Message</label>
                        <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="What do you want to ask / say?"></textarea>
                    </div>

                    <button href="#contact" className="button button--flex contact-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
}

export default Contact;