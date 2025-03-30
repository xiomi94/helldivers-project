import "./CommandModal.css"
import {useState} from "react";

interface Props {
  onClickCommand: (command: string) => void,
  show: boolean,
  setShowCommandUser:  React.Dispatch<React.SetStateAction<boolean>>
}

function CommandModal({onClickCommand, show, setShowCommandUser}: Props) {

  const [lastPressed, setLastPressed] = useState<string | null>(null)
  const [lastPressedInterval, setLastPressedInterval] = useState<NodeJS.Timeout | null>(null)

  const onClickArrow = (arrow: string) => {
    if (lastPressedInterval) {
      clearTimeout(lastPressedInterval)
    }
    setLastPressed(arrow)
    onClickCommand(arrow)
    setLastPressedInterval(setTimeout(() => {
      setLastPressed(null)
      setLastPressedInterval(null)
    }, 200))
  }

  return (
    <div style={{display: show ? 'flex' : 'none'}} className={"command-modal-container"}>

      <i className="bi bi-x-square-fill command-modal-close-button" onClick={() => {setShowCommandUser(false)}}></i>

      <div className={"command-modal-row-container"}>
        <i
          className={`command-modal-arrow bi ${lastPressed == 'up' ? 'bi-arrow-up-square-fill' : 'bi-arrow-up-square'}`}
          onClick={() => onClickArrow('up')}></i>
      </div>

      <div className={"command-modal-row-container"}>
        <i
          className={`command-modal-arrow bi ${lastPressed == 'left' ? 'bi-arrow-left-square-fill' : 'bi-arrow-left-square'}`}
          onClick={() => onClickArrow('left')}></i>
        <i
          className={`command-modal-arrow bi ${lastPressed == 'down' ? 'bi-arrow-down-square-fill' : 'bi-arrow-down-square'}`}
          onClick={() => onClickArrow('down')}></i>
        <i
          className={`command-modal-arrow bi ${lastPressed == 'right' ? 'bi-arrow-right-square-fill' : 'bi-arrow-right-square'}`}
          onClick={() => onClickArrow('right')}></i>
      </div>
    </div>
  )

}

export default CommandModal