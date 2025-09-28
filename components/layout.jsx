import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MobileMenu } from './MobileMenu.jsx';

export default function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";}, [menuOpen]);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-content">
                        <Link to="/comp229-portfolio" className="navbar-logo">B<span>A</span></Link>

                        <div className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                            &#9776;
                        </div>

                        <div className="navbar-menu">
                            <Link to="/comp229-portfolio">Home</Link>
                            <Link to="/comp229-portfolio/about">About</Link>
                            <Link to="/comp229-portfolio/education">Education</Link>
                            <Link to="/comp229-portfolio/projects">Projects</Link>
                            <Link to="/comp229-portfolio/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    );
}