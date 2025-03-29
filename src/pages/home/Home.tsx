import "./Home.css"
import ButtonHelldiver from "../../components/button-helldiver/ButtonHelldiver.tsx";
import {useNavigate} from "react-router";
import {
  adviceSuperEarthImage, enlistTodayImage,
  helldiversImage, helldiversSaluteAdviceImage,
  helldiversSaluteGif,
  missionAccomplishedImage
} from "../../assets/images";
import {useEffect, useState} from "react";
import {ref, onValue} from "firebase/database";
import {database} from "../../utils/initializeFirebase.ts";
import {MissionInterface} from "../../interfaces/missionsInterfaces.ts";
import Mission from "../../components/mission/Mission.tsx";

function Home() {
  const navigate = useNavigate()
  const [mission, setMissions] = useState<{ [key: string]: MissionInterface }>({})

  const navigateTo = (url: string) => {
    navigate(url)
  }

  useEffect(() => {
    const missionRefFirebase = ref(database, 'missions')
    onValue(missionRefFirebase, (snapshot) => {
      if (snapshot.exists()) {
        setMissions(snapshot.val())
      }
    })
  }, []);

  const missionsRender = Object.entries(mission).map((entry) => {
    const key = entry[0]
    const value = entry[1]

    return <Mission mission={value} key={key}/>
  })

  return (
    <>
      <div className="home-mobile">
        <img src={helldiversImage} className="home-image-mobile" alt="helldivers-photo"/>
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
          <h2 className={"home-mission-title"}>Misiones</h2>
          <ul className={"home-missions-list"}>
            { missionsRender }
          </ul>
        </section>
        <img src={helldiversSaluteGif} className="helldivers-gif" alt="helldivers gif"/>
      </div>

      <div className="home-desktop">
        <aside className={"home-desktop-aside"}>
          <img src={missionAccomplishedImage} alt="mission-accomplished"/>
          <img src={adviceSuperEarthImage} alt="advice-super-earth"/>
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
          <h2 className={"home-mission-title"}>Misiones</h2>
          <ul className={"home-missions-list"}>
            { missionsRender }
          </ul>
        </section>
        <aside className={"home-desktop-aside"}>
          <img src={enlistTodayImage} alt="enlist-today"/>
          <img src={helldiversSaluteAdviceImage} alt="helldivers-salute-advice"/>
        </aside>
      </div>
    </>
  )
}

export default Home