import React from 'react';
import './Contact.css'; // Import the CSS file for styles


const Contact = () => {
    return (
        <div className="contact-container animate-fade-in">
            <h1 className="contact-title">Contact Information</h1>
            <div className="contact-info animate-fade-in">
                <div className="contact-item">
                    <p><strong>Name:</strong> Samruddhi Vijay Shrawagi</p>
                </div>
                <div className="contact-item">
                    <p><strong>Email:</strong> samruddhi.shrawagi@gmail.com</p>
                </div>
                <div className="contact-item">
                    <p><strong>Phone:</strong> +91 7045850216</p>
                </div>
                <div className="contact-item">
                    <p>
                        <strong>WhatsApp:</strong> 
                        <a 
                            href="https://wa.me/7045850216" 
                            className="whatsapp-link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            What'sapp me 
                           
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;