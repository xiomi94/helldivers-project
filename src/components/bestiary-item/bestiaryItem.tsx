interface Props {
  name: string,
  description: string[],
  imageSrc: string,
  backgroundColor: string,
}

function BestiaryItem(props: Props) {
  return(
    <>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{props.imageSrc}</p>
      <p>{props.backgroundColor}</p>
    </>
  )
}

export default BestiaryItem