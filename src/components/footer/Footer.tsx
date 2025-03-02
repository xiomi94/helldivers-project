import './Footer.css'

function Footer() {

  const navigateNewTab = (url: string) => {
    const newTab = window.open(url, "_blank")
    if (newTab) {
      newTab.focus()
    }
  }

  return(
    <footer className="footer-container">
        <button className="footer-button-icons" onClick={() => {navigateNewTab("https://github.com/xiomi94/helldivers-project")}}>
          <i className="bi bi-github"></i>
        </button>
        <button className="footer-button-icons" onClick={() => {navigateNewTab("https://www.instagram.com/helldivers2game/?hl=es")}}>
          <i className="bi bi-instagram"></i>
        </button>
        <button className="footer-button-icons" onClick={() => {
          navigateNewTab("https://helldivers.fandom.com/wiki/Helldivers_Wiki")
        }}>
          <i className="bi bi-wikipedia"></i>
        </button>
    </footer>
  )
}

export default Footer