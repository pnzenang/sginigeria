import { BsMoon, BsSun } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLinks } from '../components';

import Logo from './Logo';
import { useHomeContext } from '../pages/HomeLayout';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { toggleSidebar } = useHomeContext();
  // const [theme, setTheme] = useState(false);

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className='bg-base-300 sticky top-0 flex h-20 sm:h-20 place-content-center z-20'>
      <div className=' align-element  navbar '>
        <div className='navbar-start'>
          {/* TITLE */}
          <div className=' hidden lg:block scale-90  flex-row '>
            <Logo />
          </div>
          <button className='nav-btn lg:hidden' onClick={toggleSidebar}>
            <FaBarsStaggered className='h-9 w-9 text-primary' />
          </button>
        </div>
        <div className='navbar-center hidden lg:flex '>
          <ul className='menu menu-horizontal text-gray-500'>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end gap-3'>
          {/* THEME SETUP */}
          <div className='w-11 h-11   flex items-center justify-center rounded-xl hover:shadow-xl hover:bg-base-100 mr-2'>
            <label className='swap swap-rotate '>
              <input type='checkbox' onChange={handleTheme} />
              {/* sun icon */}
              <BsMoon className='swap-on h-7 w-7 ' />
              {/* moon icon */}
              <BsSun className='swap-off h-7 w-7  ' />
            </label>
          </div>
          <div className='flex gap-5 justify-center items-center my-5'>
            <Link to='/login' className='btn  btn-outline btn-primary '>
              Login
            </Link>
            <Link to='/register' className='btn  btn-outline btn-neutral'>
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
