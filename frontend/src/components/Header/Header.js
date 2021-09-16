import {NavLink} from 'react-router-dom';
import './Header.css';

function Header() {
    return (
      <div className='header'>
          <nav className="navigation">
                <ul className='nav nav-pills flex-column flex-sm-row'>
                  <li><NavLink  exact className='flex-sm-fill text-sm-center nav-link'  to='/'>Home</NavLink></li>
                  <li><NavLink  className='flex-sm-fill text-sm-center nav-link'  to='/note'>Note</NavLink></li>
                  <li><NavLink  className='flex-sm-fill text-sm-center nav-link'  to='/create'>Create</NavLink></li>
                  <li><NavLink  className='flex-sm-fill text-sm-center nav-link'  to='/about'>About</NavLink></li>
                </ul>
              
                <ul className='nav nav-pills flex-column flex-sm-row auth'>
                  <li><NavLink  className='flex-sm-fill text-sm-center nav-link'  to='/login'>Log in</NavLink></li>
                  <li><NavLink  className='flex-sm-fill text-sm-center nav-link'  to='/registration'>Registration</NavLink></li>
                </ul>
               
          </nav>
          
      </div>
    );
  }
  
  export default Header;
  