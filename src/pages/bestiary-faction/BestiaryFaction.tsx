import {useParams} from "react-router";
import "./BestiaryFaction.css"
import {BestiaryFactionInterface, bestiaryList} from "../../constants/bestiaryList.ts";
import BestiaryItem from "../../components/bestiary-item/BestiaryItem.tsx";

function BestiaryFaction() {

  const urlParams = useParams()

  let bestiaryFactionData: BestiaryFactionInterface | undefined;
  let bestiaryName = ""

  if (urlParams.faction == "automatons") {
    bestiaryFactionData = bestiaryList.automatons
    bestiaryName = "AUTÓMATAS"
  } else if (urlParams.faction == "terminids") {
    bestiaryFactionData = bestiaryList.terminids
    bestiaryName = "TERMÍNIDOS"
  } else if (urlParams.faction == "iluminates") {
    bestiaryFactionData = bestiaryList.iluminates
    bestiaryName = "ILUMINADOS"
  }

    return (
    <div className="bestiary-faction-container">
      {!bestiaryFactionData && <p> No existe ninguna facción con el nombre {urlParams.faction} </p>}
      { bestiaryFactionData && <h2 style={{color: bestiaryFactionData!.color}}>{bestiaryName}</h2> }
      <ul>
        {
          bestiaryFactionData && (
            bestiaryFactionData.enemies.map((enemy) => {
              return <BestiaryItem key={enemy.name} name={enemy.name}
                                   color={bestiaryFactionData!.color} imgSrc={enemy.imageSrc}/>
            })
          )
        }
      </ul>
    </div>
  )
}

export default BestiaryFaction