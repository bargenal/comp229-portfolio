import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <section className="section">
            <div className="section-container">
                <h1 className="home-title">Hi, I'm Brandon Almanza</h1>
                
                <p className="home-description">
                    I'm a self-motivated software engineer with a passion for building robust and reliable applications.
                    Currently looking for a Co-op/Internship position for Winter 2026 where I can apply my skills and
                    contribute to exciting real world projects and learn from industry professionals.
                </p>
                
                <div className="button-group">
                    <Link to="/projects" className="btn-primary">View Projects</Link>
                    <Link to="/contact" className="btn-secondary">Contact Me</Link>
                </div>
            </div>
        </section>
    );
};
