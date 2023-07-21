import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/auth';
import toast from 'react-hot-toast';


function NavBar() {
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem('auth');
    toast.success('Logout Successfully');
  };
  return (
    <>
      <nav>
        <a href="/">
          <img src="images/vanvasiLogo.jpg" alt="logo" />
        </a>
        <div>
          <ul id="navbar">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/product">Shop Now</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            {!auth.user ? (
              <>
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth?.user?.name}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href={`/dashboard/${
                          auth?.user?.role === 1 ? 'admin' : 'user'
                        }`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={handleLogout}
                        href="/login"
                        className="dropdown-item"
                      >
                        Logout
                      </a>
                      
                    </li>
                  </ul>
                </li>
              </>
            )}
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
