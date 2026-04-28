import {Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
              
            <Link to="/about">About</Link>< t />
            
            <Link to="/contact">Contact</Link>
        </nav>
    );
}export default Navbar;