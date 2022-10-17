import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import search from '../assets/search-solid.svg'
import Avatar from '../components/Avatar/Avatar'
import './Navbar.css';

const Navbar = () => {

    // var User = 123;
  var User = null;

  return (
      <nav className='main-nav'>
          <div className='navbar'>
              <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' />
              </Link> 
              <Link to='/' className='nav-item nav-btn'>About</Link>
              <Link to='/' className='nav-item nav-btn'>Products</Link>
              <Link to='/' className='nav-item nav-btn'>For Teams</Link>
              <form>
                  <input type='text' placeholder='Search...' />
                      <img src={search} alt='search' width='18px' className='search-icon'/>
              </form>
              {User === null ? 
                  <Link to='/Auth' className='nav-item nav-links '>Log in</Link> :  // if user is null then re-route to login page
                  <>
                      <Link to='/User' style={{textDecoration:'none'}}><Avatar backgroundColor='#009dff' px='5px' py='11px' borderRadius='50%' color='white' >R</Avatar></Link>
                      <button className='nav-item nav-links'>Log out</button>
                  </>
               }
          </div>
    </nav>
  )
}

export default Navbar