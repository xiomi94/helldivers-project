import {ReactNode} from "react";
import "./ButtonHelldiver.css"

interface Props {
  children: ReactNode,
  onClickFunc: () => void
}

function ButtonHelldiver(props: Props) {
  return(
    <button className="button-helldiver" onClick={props.onClickFunc}>
      {props.children}
    </button>
  )
}

export default ButtonHelldiver