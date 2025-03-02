import "./Home.css"
import ButtonHelldiver from "../../components/button-helldiver/ButtonHelldiver.tsx";
import {useNavigate} from "react-router";

function Home() {
  const navigate = useNavigate()

  const navigateTo = (url: string) => {
    navigate(url)
  }

  return (
    <>
      <img src="/src/assets/images/helldivers.jpeg" className="home-image-mobile" alt="helldivers-photo"/>
      <section className="home-main-content-message">
        <h2>¡ATENCIÓN SOLDADO!</h2>
        <p className="home-main-content-message-p">
          La democracia necesita héroes como tú. Únete a las filas de los Helldivers y defiende la libertad de la
          galaxia con fuego y acero. Solo juntos venceremos. ¿Responderás al llamado?
        </p>
        <ButtonHelldiver onClickFunc={() => {navigateTo("/enlist")}}>
          ALÍSTATE
        </ButtonHelldiver>
      </section>
      <img src="/src/assets/images/helldivers-salute.gif" className="helldivers-gif" alt="helldivers gif"/>
    </>
  )
}

export default Home