import HeaderLogo from '../assets/headerlogo.webp';
import CartSvg from '../assets/cart.svg';

import './components.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SideCart from './SideCart';

const Header = () => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }

  const [cartState, setCartState] = useState('cart-closed');

  const handleCartClick = () => {
      if (cartState === 'cart-opened') {
          setCartState('cart-closed');
      } else {
          setCartState('cart-opened');
      }
  }

  return(
    <>
    <div className='header-topbar'>Quality products at the right price</div>
    <div className='header-container'>
      <button onClick={goToHome}>
        <img className='header-logo' src={HeaderLogo} />
      </button>
      <button className='header-cart-logo-container' onClick={() => handleCartClick()}>
        <img className='header-cart-logo' src={CartSvg} />
        <span className='header-cart-logo-badge'>3</span>
      </button>
    </div>
    <SideCart cartState={cartState} />
    </>
  );
}

export default Header;