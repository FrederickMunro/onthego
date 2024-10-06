import HeaderLogo from '../assets/headerlogo.webp';
import CartSvg from '../assets/cart.svg';

import './components.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }

  return(
    <>
    <div className='header-topbar'>Quality products at the right price</div>
      <div className='header-container'>
        <button onClick={goToHome}>
          <img className='header-logo' src={HeaderLogo} />
        </button>
        <button className='header-cart-logo-container'>
          <img className='header-cart-logo' src={CartSvg} />
          <span className='header-cart-logo-badge'>3</span>
        </button>
      </div>
    </>
  );
}

export default Header;