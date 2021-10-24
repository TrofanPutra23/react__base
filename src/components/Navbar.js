import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button , setButton] = useState(true);

    const showButton = () =>{
        if (window.innerWidth <= 960){
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    window.addEventListener ('resize' ,showButton);

    const handleClick = () => setClick(!click) //funtion untuk mengubah icon menu hamburger bar
    const conditonMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbarContainer">
                    <Link to="/" className="navbarLogo">LPM <i class="fas fa-book-reader"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'navMenu active' : 'navMenu'}>
                        <li className="navItem main">
                            <Link to='/pageA' className='navLinks' onClick={conditonMobileMenu} >
                                Page 1
                            </Link>
                        </li>
                        <li className="navItem side">
                            <Link to='/pageB' className='navLinks' onClick={conditonMobileMenu} >
                                side page 1
                            </Link>
                        </li>
                        <li className="navItem side">
                            <Link to='/pageC' className='navLinks' onClick={conditonMobileMenu} >
                                Page 3
                            </Link>
                        </li>
                        <li className="navItem side">
                            <Link to='/pageC' className='navLinks' onClick={conditonMobileMenu} >
                                Page 3
                            </Link>
                        </li>                        <li className="navItem side">
                            <Link to='/pageC' className='navLinks' onClick={conditonMobileMenu} >
                                Page 3
                            </Link>
                        </li>                        <li className="navItem side">
                            <Link to='/pageC' className='navLinks' onClick={conditonMobileMenu} >
                                Page 3
                            </Link>
                        </li>                        <li className="navItem side">
                            <Link to='/pageC' className='navLinks' onClick={conditonMobileMenu} >
                                Page 3
                            </Link>
                        </li>                        <li className="navItem side">
                            <Link to='/pageC' className='navLinks' onClick={conditonMobileMenu} >
                                Page 3
                            </Link>
                        </li>                        <li className="navItem side">
                            <Link to='/pageC' className='navLinks' onClick={conditonMobileMenu} >
                                Page 3
                            </Link>
                        </li>                        <li className="navItem side">
                            <Link to='/pageC' className='navLinks' onClick={conditonMobileMenu} >
                                Page 3
                            </Link>
                        </li>                        <li className="navItem side">
                            <Link to='/pageC' className='navLinks' onClick={conditonMobileMenu} >
                                Page 3
                            </Link>
                        </li>                        <li className="navItem side">
                            <Link to='/pageC' className='navLinks' onClick={conditonMobileMenu} >
                                Page 3
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}