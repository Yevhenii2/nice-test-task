import Logo from '../Logo/Logo';
import { useLayoutEffect, useRef, useState } from 'react';

import instagramIcon from '../../assets/icons/instagram-icon.png';
import facebookIcon from '../../assets/icons/facebook-icon.png';
import burgerIcon from '../../assets/icons/burger.png';

function Header() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const fixedHeader = useRef<HTMLDivElement>(null);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  useLayoutEffect(() => {
    if (fixedHeader.current) {
      setHeaderHeight(fixedHeader.current.clientHeight);
    }
  });

  return (
    <header style={{ height: headerHeight }}>
      <div className="fixed-header" ref={fixedHeader}>
        <div className="header-container">
          <div
            className="burger"
            onClick={() => {
              setIsBurgerMenuOpen(!isBurgerMenuOpen);
            }}
          >
            <img src={burgerIcon} />
          </div>
          <Logo style="dark" />
          <div className="header-menu">
            <nav className={`header-navigation  ${isBurgerMenuOpen && 'open'}`}>
              <a href="#">o que fazemos</a>
              <a href="#">como te ajudamos</a>
              <a href="#">fale conosco</a>
            </nav>
            <div className="header-contacts">
              <a href="#">
                <img src={instagramIcon} />
              </a>
              <a href="#">
                <img src={facebookIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
