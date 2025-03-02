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
      <div className="home-mobile">
        <img src="/src/assets/images/helldivers.jpeg" className="home-image-mobile" alt="helldivers-photo"/>
        <section className="home-main-content-message">
          <h2>¡ATENCIÓN SOLDADO!</h2>
          <p className="home-main-content-message-p">
            La democracia necesita héroes como tú. Únete a las filas de los Helldivers y defiende la libertad de la
            galaxia con fuego y acero. Solo juntos venceremos. ¿Responderás al llamado?
          </p>
          <ButtonHelldiver onClickFunc={() => {
            navigateTo("/enlist")
          }}>
            ALÍSTATE
          </ButtonHelldiver>
        </section>
        <img src="/src/assets/images/helldivers-salute.gif" className="helldivers-gif" alt="helldivers gif"/>
      </div>

      <div className="home-desktop">
        <aside>
          <img src="/src/assets/images/mission-accomplished.jpeg" alt="mission-accomplished"/>
          <img src="/src/assets/images/advice-super-earth.jpg" alt="advice-super-earth"/>
        </aside>
        <section>
          <h2>¡ATENCIÓN CIUDADANO DE SUPERTIERRA!</h2>
          <p>
            Este es un llamado de emergencia. La democracia necesita valientes, y tú has sido seleccionado para unirte
            a las filas de los HELLDIVERS, la última línea de defensa contra los enemigos de la libertad.
          </p>
          <p>
            Los Terminidos devoran mundos. Los Autómatas amenazan con su fría maquinaria. Los Iluminados conspiran desde
            las sombras.
            Solo con tu ayuda podremos llevar la democracia a cada rincón de la galaxia.
          </p>
          <p>
            Únete ahora y lucha por la gloria de la Super Tierra. Recibirás tu armamento, tu armadura y,
            lo más importante, la oportunidad de servir a algo más grande que tú mismo.
          </p>
          <p>
            Libertad. Democracia. Fuego Supremo<br/>
            ¿Responderás al llamado, soldado?
          </p>

          <ButtonHelldiver onClickFunc={() => {
            navigateTo("/enlist")
          }} buttonStyle={{ fontSize: "40px", padding: "30px 40px" }}>
            ALÍSTATE
          </ButtonHelldiver>
        </section>
        <aside>
          <img src="/src/assets/images/enlist-today.png" alt="enlist-today"/>
          <img src="/src/assets/images/helldivers-salute-advice.jpg" alt="helldivers-salute-advice"/>
        </aside>
      </div>
    </>
  )
}

export default Home