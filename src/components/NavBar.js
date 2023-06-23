import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] =useState('home');
    const [scrolled, seScrolled] = useState(false);

        useEffect(() => {
            const onScroll = () => {
                if (window.scrollY >50) {
                    seScrolled(true);
                } else {
                    seScrolled(false);
                }
            }

            window.addEventListener("scroll", onScroll);

            return () => window.addEventListener("scroll", onScroll);
        }, [])

        const onUpdateActiveLink = (value) => {
            setActiveLink(value);
        }
    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Ferir"/>    
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggle-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="Home" className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Home')}>Home</Nav.Link>
                <Nav.Link href="Skill" className={activeLink === 'Skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Skill')}>Skill</Nav.Link>
                <Nav.Link href="Projects" className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>
                <Nav.Link href="Contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
    };