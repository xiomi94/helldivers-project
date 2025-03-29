import './ProgressBar.css'

interface Props {
  percentage: number
}

function ProgressBar({percentage}: Props) {

  return <div className={'progress-bar-container'}>
    <div className={'progress-bar-inner'} style={{width: `min(${percentage}%, 100%)`}}></div>
  </div>

}

export default ProgressBar