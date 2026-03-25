import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HeaderComponent.css"

const HeaderComponent = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => { setIsSticky(window.scrollY > 100) };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar_bg ${isSticky ? 'sticky_nav' : ''}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <div className='navbar_brand_name'><span className="navbar_brand_color">AS</span> Shamim</div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className='nav-link nav_link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className='nav-link nav_link'>Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className='nav-link nav_link'>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/teams" className='nav-link nav_link'>Our Teams</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/payments" className='nav-link nav_link'>Payment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className='nav-link nav_link'>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-2">
                        <Link to='/appointment' className='nav_btn'>Appointment</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent