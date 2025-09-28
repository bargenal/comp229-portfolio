import { useEffect } from "react";
import { Link } from 'react-router-dom';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";};}, [menuOpen]
        );

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <Link to="/comp229-portfolio" onClick={handleLinkClick}>Home</Link>
            <Link to="/comp229-portfolio/about" onClick={handleLinkClick}>About</Link>
            <Link to="/comp229-portfolio/projects" onClick={handleLinkClick}>Projects</Link>
            <Link to="/comp229-portfolio/contact" onClick={handleLinkClick}>Contact</Link>
            <Link to="/comp229-portfolio/education" onClick={handleLinkClick}>Education</Link>
        </div>
    );
};