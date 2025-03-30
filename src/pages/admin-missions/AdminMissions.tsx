import './AdminMissions.css'
import ButtonHelldiver from "../../components/button-helldiver/ButtonHelldiver.tsx";
import AdminMission from "../../components/admin-mission/AdminMission.tsx";
import {database} from "../../utils/initializeFirebase.ts";
import {ref, get, update, remove} from "firebase/database";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid'
import {MissionInterface} from "../../interfaces/missionsInterfaces.ts";

function AdminMissions() {

  const [missions, setMissions] = useState<{ [key: string]: MissionInterface }>({})

  useEffect(() => {
    const getMissionsByFirebase = async () => {
      try {
        const snapshot = await get(ref(database, 'missions'))
        if (snapshot.exists()) {
          const values: { [key: string]: MissionInterface } = snapshot.val()
          for (const mission of Object.values(values)) {
            mission.isNew = false
          }
          setMissions(values)
        }
      } catch (e) {
        alert(e)
      }
    }
    getMissionsByFirebase().then()
  }, [])

  const onClickAddButton = async () => {
    setMissions({
      ...missions,
      [uuidv4()]: {
        title: '',
        description: '',
        requirement: '',
        percent: 0,
        isNew: true
      }
    })
  }

  const onClickSaveButton = async (args: { id: string, formData: Partial<MissionInterface> }) => {
    const missionDatabase = missions[args.id]
    if (missionDatabase) {
      if (missionDatabase.isNew) {
        await update(ref(database, 'missions'), {[args.id]: args.formData})
        setMissions({
          ...missions,
          [args.id]: {
            ...missionDatabase,
            ...args.formData,
            isNew: false
          }
        })
        alert("Se añadio correctamente")
      } else {
        try {
          await update(ref(database, `missions/${args.id}`), args.formData)
          setMissions({
            ...missions,
            [args.id]: {
              ...missionDatabase,
              ...args.formData
            }
          })
          alert("Se actulizo correctamente")
        } catch (error) {
          alert(error)
          console.log(error)
        }
      }
    }
  }

  const onClickDeleteButton = async (args: {id: string}) => {
    const missionDatabase = missions[args.id]
    if (missionDatabase) {
      if (missionDatabase.isNew) {
        const newData = {
          ...missions
        }
        delete newData[args.id]
        setMissions(newData)
      } else {
        try {
          await remove(ref(database, `missions/${args.id}`))
          const newData = {
            ...missions
          }
          delete newData[args.id]
          setMissions(newData)
          alert("Eliminado de base de datos correctamente")
        } catch (e) {
          alert(e)
          console.log(e)
        }
      }
    }
  }

  const missionsEntries = Object.entries(missions).map((entry, index) => {
    const value = entry[1]
    const id = entry[0]
    const mission: Partial<MissionInterface> = {
      title: value.title,
      percent: value.percent,
      requirement: value.requirement,
      description: value.description
    }
    return <>
      <h3 style={{color: '#FFEA00'}}>Mision {index + 1}</h3>
      <AdminMission key={id} mission={mission} onClickDelete={() => onClickDeleteButton({id})}
                    onClickSave={(args) => onClickSaveButton({...args, id: id})} isNew={value.isNew}/>
    </>
  })

  return (
    <div className={"admin-missions-container"}>

      <ul className={"admin-missions-mission-list"}>
        {missionsEntries}
      </ul>

      <ButtonHelldiver onClickFunc={() => onClickAddButton()}>
        Añadir
      </ButtonHelldiver>
    </div>
  )

}

export default AdminMissions