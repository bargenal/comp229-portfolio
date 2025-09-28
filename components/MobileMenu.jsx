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
            <Link to="/" onClick={handleLinkClick}>Home</Link>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
            <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            <Link to="/education" onClick={handleLinkClick}>Education</Link>
        </div>
    );
};