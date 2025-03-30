import "./Bestiary.css"
import {useNavigate} from "react-router";
import {hulkImage, stalkerImage, votelessImage} from "../../assets/images";

function Bestiary() {
  const navigate = useNavigate()

  const navigateTo = (url: string) => {
    navigate(url)
  }

  return (
    <div className="bestiary-container">
      <h2>BESTIARIO</h2>

      <ul className="bestiary-list">
        <li onClick={() => {navigateTo("/bestiary/terminids")}}>
          <img src={stalkerImage} alt="stalker"/>
          <h3>TERMÍNIDOS</h3>
        </li>
        <li onClick={() => {navigateTo("/bestiary/automatons")}}>
          <img src={hulkImage} alt="hulk"/>
          <h3>AUTÓMATAS</h3>
        </li>
        <li onClick={() => {navigateTo("/bestiary/iluminates")}}>
          <img src={votelessImage} alt="votoless"/>
          <h3>ILUMINADOS</h3>
        </li>
      </ul>
    </div>
  )
}

export default Bestiary