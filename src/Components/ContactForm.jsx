import React, { useEffect, useState } from 'react';
import './contactStyle.css';
// import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [result, setResult] = React.useState("");
    const [showPopup, setShowPopup] = useState(false);
    const formKey = import.meta.env.VITE_FORM_KEY;
    const onSubmit = async (event) => {
        const formMessage = document.getElementById("form_message");
        formMessage.style.color = "#1a1a1a";
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", formKey);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult("Your Message has been Sent Successfully");
            formMessage.style.color = "green";
            setShowPopup(true);
            event.target.reset();
            setTimeout(() => {
                setShowPopup(false);
            }, 10000); // Hide popup after 5 seconds
        } else {
            console.log("Error", data);
            setResult(data.message);
            formMessage.style.color = "red";
        }
    };

    useEffect(() => {
        const handleClickOutside = () => setShowPopup(false);

        if (showPopup) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [showPopup]);

    return (
        <>
            <div className="container">
                <div className="contact_section">
                    <h2 className="headingStyle">Let's build a thing</h2>

                    <form onSubmit={onSubmit} className="contact-form">
                        {/* <input type="hidden" name="redirect" value="https://web3forms.com/success"/> */}
                        <input type="hidden" name="from_name" value="Portfolio form submitted someone" />

                        <div className="contact_input_group">
                            <input type="text" id="first-name" name="firstName" placeholder="FIRST NAME *" required />
                            <input type="text" id="last-name" name="lastName" placeholder="LAST NAME *" required />
                        </div>
                        <div className="contact_input_group">
                            <input type="email" id="email" name="email" placeholder="EMAIL *" required />
                            <input type="text" id="phone" name="phone" placeholder="PHONE" />
                        </div>
                        <div className="contact_input_group">
                            <input type="text" id="subject" name="subject" placeholder="SUBJECT *" required />
                        </div>
                        <div className="contact_input_group">
                            <textarea id="message" name="message" placeholder="MESSAGE *" required></textarea>
                        </div>
                        {/* <ReCAPTCHA sitekey="6LfyXgcqAAAAANF6YSqjRlutlwrQv__lhjVK40tt" /> */}

                        <div className="contact_input_group">
                            <button type="submit" className='btn btn-outline-dark contact_button'>SEND IT</button>
                            <span id='form_message'>{result}</span>
                        </div>
                    </form>
                    {showPopup && (
                        <>
                            <div className="dull_bg"></div>
                            <div className="formPopup">
                                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ContactForm;
