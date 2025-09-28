export default function Contact(){

    return (
        <section className="section">
            <div className="section-container">
                <h2 className="about-title">Contact Me</h2>
                
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
                    </div>
                    
                    <div className="form-group">
                        <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" required />
                    </div>
                    
                    <div className="form-group">    
                        <input type="tel" id="phone" name="phone" className="form-input" placeholder="Your Phone" required />
                    </div>

                    <div className="form-group">
                        <textarea id="message" name="message" className="form-textarea" placeholder="Your Message" rows={5} required></textarea>
                    </div>
                    
                    <button type="submit" className="btn-primary" style={{ width: '112%' }}>Submit</button>
                </form>
            </div>
        </section>
    );
}