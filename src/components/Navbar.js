import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import bag from '../assets/bag.svg';
import logo from '../assets/logo.svg'

//CSS

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", window.screenY > 200)
    })
  return (
    <header className='header'>
        <div className='container flex'>
            <div className='nav-links'>
                <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onclick={() => setSidebar(false)}>
                    <li><NavLink to='/'>About</NavLink></li>
                    <li><NavLink to='/'>How it works</NavLink></li>
                    <li><NavLink to='/'>Contact</NavLink></li>
                </ul>
            </div>
            <div className='logo'>
                <NavLink to='/'><img src={logo} alt="" /></NavLink>
            </div>
            <div className='nav-links'>
                <NavLink to='/'>
                <img src={bag} alt="" />
                </NavLink>
            </div>
            <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
                {sidebar ? <CloseIcon/> : <MenuIcon/>}
            </button>
        </div>
    </header>
    
  )
}

export default Navbar