import './Footer.css'
import {useState} from "react";
import {useNavigate} from "react-router";
import CommandModal from "../command-modal/CommandModal.tsx";

function Footer() {

  const [commandUser, setCommandUser] = useState<string[]>([])
  const [showCommandUser, setShowCommandUser] = useState<boolean>(false)
  const navigate = useNavigate()

  const navigateNewTab = (url: string) => {
    const newTab = window.open(url, "_blank")
    if (newTab) {
      newTab.focus()
    }
  }

  const onClickCommand= (command: string) => {
    const newCommandUser = [command, ...commandUser]
    const commandForAccessAdminMission = ['up', 'left', 'right', 'down', 'up']

    if (newCommandUser.length > 5) {
      newCommandUser.splice(5)
    }

    let navigateToAdminMission = true

    if (newCommandUser.length < 5) {
      navigateToAdminMission = false
    } else {
      for (let i = 0; i < commandForAccessAdminMission.length; i++) {
        if (commandForAccessAdminMission[i] !== newCommandUser[i]) {
          navigateToAdminMission = false
          break;
        }
      }
    }

    if (navigateToAdminMission) {
      setShowCommandUser(false)
      navigate('/admin-missions')
    }

    setCommandUser(newCommandUser)
  }

  const onClickShowCommandUser = () => {
    setShowCommandUser(true)
    alert("Comando para entrar al administrador de misions: ARRIBA, ABAJO, DERECHA, IZQUIERDA, ARRIBA")
  }

  const onClickRssButton = () => {
    window.open(`${window.location.origin}/helldivers-project/rss.xml`, "_blank")
  }

  return (
    <>
      <footer className="footer-container">
        <button className="footer-button-icons">
          <i className="bi bi-rss" onClick={onClickRssButton}></i>
        </button>
        <button className="footer-button-icons">
          <i className="bi bi-shield" onClick={onClickShowCommandUser}></i>
        </button>
        <button className="footer-button-icons" onClick={() => {
          navigateNewTab("https://github.com/xiomi94/helldivers-project")
        }}>
          <i className="bi bi-github"></i>
        </button>
        <button className="footer-button-icons" onClick={() => {
          navigateNewTab("https://www.instagram.com/helldivers2game/?hl=es")
        }}>
          <i className="bi bi-instagram"></i>
        </button>
        <button className="footer-button-icons" onClick={() => {
          navigateNewTab("https://helldivers.fandom.com/wiki/Helldivers_Wiki")
        }}>
          <i className="bi bi-wikipedia"></i>
        </button>
      </footer>
      <CommandModal setShowCommandUser={setShowCommandUser} onClickCommand={(command: string) => {onClickCommand(command)}} show={showCommandUser}/>
    </>

  )
}

export default Footer