import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'
import yt from '../assets/YT.svg'
import ig from '../assets/IG.svg'
import fb from '../assets/FB.svg'

const Navbar = () => {
  return (
    <footer className='footer'>
        <div className='container containerFooter flex'>
            <div className='nav-links-footer'>
                <ul>
                    <li><NavLink to='/'>About</NavLink></li>
                    <li><NavLink to='/'>How it works</NavLink></li>
                    <li><NavLink to='/'>Contact</NavLink></li>
                </ul>
            </div>
            <div className='logoFooter'>
                <NavLink to='/'><img src={logo} alt="" /></NavLink>
            </div>
            <div className='nav-links-footer'>
                <ul>
                    <li><NavLink to='/'>signup</NavLink></li>
                    <li><NavLink to='/'>login</NavLink></li>
                    <li><NavLink to='/'><img src={fb} alt="" /></NavLink></li>
                    <li><NavLink to='/'><img src={ig} alt="" /></NavLink></li>
                    <li><NavLink to='/'><img src={yt} alt="" /></NavLink></li>
                </ul>                
            </div>
        </div>
        <div className="legal container">
            <p>Copyright &copy; 2022.Besnik creative</p>
        </div>
    </footer>
  )
}

export default Navbar