// Contact page - displays a form for users to reach out
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from './auth.js';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const navigate = useNavigate();

    // handle input changes
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // handle form submit
    function handleSubmit(e) {
        e.preventDefault();
        // map front-end fields to backend Contact model (firstname, lastname, email)
        const parts = formData.name.trim().split(/\s+/);
        const firstname = parts.length ? parts[0] : '';
        const lastname = parts.length > 1 ? parts.slice(1).join(' ') : '';
        const payload = { firstname, lastname, email: formData.email };
        fetch('/api/contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${auth.getToken() || ''}` },
            body: JSON.stringify(payload),
        })
        .then(res => res.json())
        .then(data => {
            // On success navigate home or show a message
            navigate('/');
        })
        .catch(err => {
            console.error(err);
            navigate('/');
        });
    }

    return (
        <section className="section">
            <div className="section-container">
                {/* Contact page title */}
                <h2 className="about-title">Contact Me</h2>

                {/* Contact form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    {/* Name input */}
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    {/* Email input */}
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    {/* Phone number input */}
                    <div className="form-group">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Your Phone"
                            required
                        />
                    </div>

                    {/* textarea field to form a professional or personal message */}
                    <div className="form-group">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-textarea"
                            placeholder="Your Message"
                            rows={5}
                            required
                        ></textarea>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn-primary" style={{ width: "112%" }}>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}