import {CSSProperties, ReactNode} from "react";
import "./ButtonHelldiver.css"

interface Props {
  children: ReactNode,
  onClickFunc: () => void,
  buttonStyle: CSSProperties
}

function ButtonHelldiver(props: Props) {
  return(
    <button className="button-helldiver" onClick={props.onClickFunc} style={props.buttonStyle}>
      {props.children}
    </button>
  )
}

export default ButtonHelldiver