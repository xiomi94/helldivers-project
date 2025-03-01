import {useNavigate} from "react-router";
import './HamburgerHeader.css'

interface Props {
  changeStateMenuOpen: (state: boolean) => void
}

function HamburgerHeader(props: Props) {

  const navigate = useNavigate()

  const navigateMenu = (url: string) => {
    props.changeStateMenuOpen(false)
    navigate(url)
  }

  return(
    <div className="hamburger-menu-container">
      <div className="hamburger-menu-outside-part" onClick={() => {props.changeStateMenuOpen(false)}}></div>
      <nav className="hamburger-menu">
        <div className="hamburger-menu-title">
          MENÚ
        </div>
        <ul>
          <li>
            <div>
              GUÍA DEL HELLDIVER
            </div>
            <ul className="hamburger-menu-submenu">
              <li>
                <button className="hamburger-menu-button-navigate" onClick={() => {
                  navigateMenu("/bestiary")
                }}>
                  BESTIARIO
                </button>
              </li>
            </ul>
          </li>
          <li>
            <button className="hamburger-menu-button-navigate" onClick={() => {
              navigateMenu("/enlist")
            }}>
              ALÍSTATE
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HamburgerHeader