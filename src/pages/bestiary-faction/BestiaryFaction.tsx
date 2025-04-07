import {useParams} from "react-router";
import "./BestiaryFaction.css"
import {BestiaryFactionInterface, bestiaryList, EnemiesInterface} from "../../constants/bestiaryList.ts";
import BestiaryItem from "../../components/bestiary-item/BestiaryItem.tsx";
import {useEffect, useState} from "react";

function BestiaryFaction() {

  const [selectedEnemy, setSelectedEnemy] = useState<null | string>(null)
  const [bestiaryFactionData, setBestiaryFactionData] = useState<null | BestiaryFactionInterface>(null)
  const [selectedEnemyObject, setSelectedEnemyObject] = useState<null | EnemiesInterface>()

  const urlParams = useParams()

  useEffect(() => {
    if (!selectedEnemy || !bestiaryFactionData) {
      setSelectedEnemyObject(null)
    } else {
      for (const enemy of bestiaryFactionData.enemies) {
        if (enemy.name == selectedEnemy) {
          setSelectedEnemyObject(enemy)
        }
      }
    }
  }, [bestiaryFactionData, selectedEnemy])

  useEffect(() => {
    if (urlParams.faction == "automatons") {
      setBestiaryFactionData(bestiaryList.automatons)
    } else if (urlParams.faction == "terminids") {
      setBestiaryFactionData(bestiaryList.terminids)
    } else if (urlParams.faction == "iluminates") {
      setBestiaryFactionData(bestiaryList.iluminates)
    }
  }, [urlParams])

  let bestiaryName = ""

  if (urlParams.faction == "automatons") {
    bestiaryName = "AUTÓMATAS"
  } else if (urlParams.faction == "terminids") {
    bestiaryName = "TERMÍNIDOS"
  } else if (urlParams.faction == "iluminates") {
    bestiaryName = "ILUMINADOS"
  }

  const onClickItem = (enemyName: string) => {
    setSelectedEnemy(enemyName)
  }

  const onClickCloseModalEnemy = () => {
    setSelectedEnemy(null)
  }

  const enemyDescription = selectedEnemyObject ? selectedEnemyObject.description.map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>
  }) : []

  console.log(enemyDescription)

  return (
    <>
      <div className="bestiary-faction-container">
        {!bestiaryFactionData && <p> No existe ninguna facción con el nombre {urlParams.faction} </p>}
        {bestiaryFactionData && <h2 style={{color: bestiaryFactionData!.color}}>{bestiaryName}</h2>}
        <ul>
          {
            bestiaryFactionData && (
              bestiaryFactionData.enemies.map((enemy) => {
                return <BestiaryItem key={enemy.name} name={enemy.name} onClickItem={onClickItem}
                                     color={bestiaryFactionData!.color} imgSrc={enemy.imageSrc}/>
              })
            )
          }
        </ul>
      </div>
      {
        selectedEnemyObject &&
        <div className="bestiary-faction-modal-enemy-container">
          <i className="bi bi-x-square-fill presentation-video-close-button" onClick={onClickCloseModalEnemy}></i>

          <h2 style={{color: bestiaryFactionData!.color}} className={"bestiary-faction-modal-enemy-name"}>{selectedEnemyObject.name}</h2>

          <div style={{border: `1px solid ${bestiaryFactionData!.color}`}} className={"bestiary-faction-modal-enemy-description"}>
            {enemyDescription}
          </div>
        </div>
      }
    </>
  )
}

export default BestiaryFaction