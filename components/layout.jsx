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
                        <Link to="/" className="navbar-logo">B<span>A</span></Link>

                        <div className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                            &#9776;
                        </div>

                        <div className="navbar-menu">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/education">Education</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    );
}