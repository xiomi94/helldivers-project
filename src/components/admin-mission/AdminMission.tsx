import './AdminMission.css'
import {useState} from "react";
import {MissionInterface} from "../../interfaces/missionsInterfaces.ts";

interface Props {
  mission: Partial<MissionInterface>,
  onClickSave: (args: { formData: Partial<MissionInterface> }) => void
  onClickDelete: () => void,
  isNew?: boolean
}

function AdminMission(props: Props) {

  const [formData, setFormData] = useState<Partial<MissionInterface>>({...props.mission})

  const formChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    let newValue: string | number = value
    if (name === 'percent') {
      newValue = Number(newValue)
    }
    setFormData(
      (prevData) => ({...prevData, [name]: newValue})
    );
  };

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const onClickRestoreButton = () => {
    setFormData({...props.mission})
  }

  return (
    <li className={"admin-mission-container"}>
      <form className={"admin-mission-form"} onSubmit={formSubmit}>
        <div className={"admin-mission-form-row"}>
          <input name={'title'} value={formData.title} placeholder={"Título"}
                 className={"admin-mission-form-input admin-mission-form-input-flex-fill"} onChange={formChange}/>
        </div>
        <textarea placeholder={"Descripción"} className={"admin-mission-form-input admin-mission-form-textarea"}
                  value={formData.description} onChange={formChange} name={'description'}/>
        <div className={"admin-mission-form-footer-container"}>
          <input name={'requirement'} value={formData.requirement} onChange={formChange} placeholder={"Requisitos"}
                 className={"admin-mission-form-input admin-mission-form-input-flex-fill admin-mission-form-input-min450w"}/>
          <input name={'percent'} value={formData.percent} onChange={formChange} placeholder={"Porcentaje"}
                 className={"admin-mission-form-input admin-mission-form-input-flex-none admin-mission-form-input-percent"}/>
        </div>
        <div className={"admin-mission-form-buttons-container"}>
          <button className={"admin-mission-form-buttons"} onClick={() => props.onClickSave({formData})}>Guardar
          </button>
          <button className={"admin-mission-form-buttons"} onClick={onClickRestoreButton} disabled={props.isNew}>Restaurar</button>
          <button className={"admin-mission-form-buttons"} onClick={() => props.onClickDelete()}>Borrar</button>
        </div>
      </form>
    </li>
  )

}

export default AdminMission;