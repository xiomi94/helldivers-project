import "./PresentationVideo.css"
import {useEffect, useState} from "react";

function PresentationVideo() {

  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const isNotFirstVisitPage = localStorage.getItem("isNotFirstVisitPage")
    if (isNotFirstVisitPage != "visited") {
      setIsVisible(true)
    }
  }, [])

  const onClickCloseButton = () => {
    localStorage.setItem("isNotFirstVisitPage", "visited")
    setIsVisible(false)
  }

  return (
    <>
      {
        isVisible &&
        <div className="presentation-video-container">
          <i className="bi bi-x-square-fill presentation-video-close-button" onClick={onClickCloseButton}></i>

          <iframe src="https://www.youtube.com/embed/Bsc0chJGNL0?si=OHDwcNuZsD_H2Tpz"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
        </div>
      }

    </>
  )
}

export default PresentationVideo