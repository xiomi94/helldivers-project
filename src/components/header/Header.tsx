import {useState} from "react";
import './Header.css'
import HamburgerHeader from "../hamburger-header/HamburgerHeader.tsx";
import {useNavigate} from "react-router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisibleHelldiverGuideSubMenu, setIsVisibleHelldiverGuideSubMenu] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  const changeIsMenuOpen = (state: boolean) => {
    setIsMenuOpen(state)
  }

  const toggleVisibilityHelldiverGuideSubMenu = () => {
    setIsVisibleHelldiverGuideSubMenu(!isVisibleHelldiverGuideSubMenu)
  }

  const menuNavigate = (url: string) => {
    navigate(url)
    setIsVisibleHelldiverGuideSubMenu(false)
  }

  return (
    <>
      <header className="header">
        <img src="/src/assets/images/logo.png" alt="Helldivers logo" className="helldivers-logo" onClick={() => {menuNavigate("/home")}}/>
        <button className="hamburger-button-icon" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </button>
        <ul className="header-menu-medium-size-navigation">
          <li>
            <button className="header-menu-medium-size-button-navigation" onClick={toggleVisibilityHelldiverGuideSubMenu}>
              GUÍA DEL HELLDIVER

              {isVisibleHelldiverGuideSubMenu && (
                <ul className="header-menu-medium-size-button-subnavigation">
                  <li onClick={(event) => {event.stopPropagation(); menuNavigate("/bestiary")}}>BESTIARIO</li>
                </ul>
              )}

            </button>
          </li>
          <li>
            <button className="header-menu-medium-size-button-navigation" onClick={() => {menuNavigate("/enlist")}}>ALÍSTATE
            </button>
          </li>
        </ul>
      </header>

      {isMenuOpen && <HamburgerHeader changeStateMenuOpen={changeIsMenuOpen}/>}
    </>
  )
}


export default Header