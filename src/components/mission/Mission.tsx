import "./Mission.css"
import {MissionInterface} from "../../interfaces/missionsInterfaces.ts";
import ProgressBar from "../progress-bar/ProgressBar.tsx";

interface Props {
  mission: MissionInterface
}

function Mission({mission}: Props) {

  return (
    <li className={"missions-container"}>
      <h2 className={"mission-border-bottom mission-section-container mission-title"}>
        {mission.title}
      </h2>
      <p className={"mission-border-bottom mission-section-container mission-text-white"}>
        {mission.description}
      </p>
      <div className={"mission-border-bottom mission-section-container mission-requirement-container mission-text-white"}>
        <h3 className={"mission-requirement-title"}>
          Requerimientos:
        </h3>
        <div>
          {mission.requirement}
        </div>
      </div>
      <div className={"mission-section-container mission-percent-container"}>
        <ProgressBar percentage={mission.percent}/>
        <div>{mission.percent <= 100 ? mission.percent : 100}%</div>
      </div>
    </li>
  )

}

export default Mission