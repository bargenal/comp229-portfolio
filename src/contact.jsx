// Contact page - displays a form for users to reach out 
export default function Contact(){

    return (
        <section className="section">
            <div className="section-container">
                {/* Contact page title */}
                <h2 className="about-title">Contact Me</h2>
                
                {/* Contact form */}
                <form className="contact-form">
                    {/* Name input */}
                    <div className="form-group">
                        <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
                    </div>
                    
                    {/* Email input */}
                    <div className="form-group">
                        <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" required />
                    </div>
                    
                    {/* Phone number input */}
                    <div className="form-group">    
                        <input type="tel" id="phone" name="phone" className="form-input" placeholder="Your Phone" required />
                    </div>

                    {/* textarea field to form a professional or personal message */}
                    <div className="form-group">
                        <textarea id="message" name="message" className="form-textarea" placeholder="Your Message" rows={5} required></textarea>
                    </div>
                    
                    {/* Submit button */}
                    <button type="submit" className="btn-primary" style={{ width: '112%' }}>Submit</button>
                </form>
            </div>
        </section>
    );
}