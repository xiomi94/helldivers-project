import "./BestiaryItem.css"

interface Props {
  name: string,
  color: string,
  imgSrc: string
}

function BestiaryItem(props: Props) {
  return(
    <li className="bestiary-item-container" style={{border: `1px solid ${props.color}`}}>
      <img src={props.imgSrc} alt="enemy"/>
    </li>
  )
}

export default BestiaryItem