// React hooks and Router imports
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MobileMenu } from './MobileMenu.jsx';
import auth from '../src/auth.js';

// Layout - contains navigation bar that appears on all pages
export default function Layout() {
    // State to track if mobile menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false);

    // Effect to prevent body scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";}, [menuOpen]);

    return (
        <>
            {/* Main navigation bar */}
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-content">
                        {/* Logo that goes to homepage when clicked */}
                        <Link to="/" className="navbar-logo">B<span>A</span></Link>

                        {/* Mobile menu hamburger button */}
                        <div className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                            &#9776;
                        </div>

                        {/* Desktop navigation */}
                                                <div className="navbar-menu">
                                                        <Link to="/">Home</Link>
                                                        <Link to="/about">About</Link>
                                                        <Link to="/education">Education</Link>
                                                        <Link to="/projects">Projects</Link>
                                                        <Link to="/contact">Contact</Link>
                                                        {!auth.isAuthenticated() && (
                                                            <>
                                                                <Link to="/signin">Sign In</Link>
                                                                <Link to="/signup">Sign Up</Link>
                                                            </>
                                                        )}
                                                        {auth.isAuthenticated() && (
                                                            <a href="#" onClick={(e)=>{e.preventDefault(); auth.signout(()=>{window.location.href='/'});}}>Sign Out</a>
                                                        )}
                                                </div>
                    </div>
                </div>
            </nav>
            
            {/* Mobile menu - appears based on menuOpen state */}
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    );
}