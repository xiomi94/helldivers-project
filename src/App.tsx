import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import Home from "./pages/home/Home.tsx";
import Enlist from "./pages/enlist/Enlist.tsx";
import HelldiverGuide from "./pages/helldiver-guide/HelldiverGuide.tsx";
import Bestiary from "./pages/bestiary/Bestiary.tsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={""} element={<Home/>}/>
                <Route path={"/enlist"} element={<Enlist/>}/>
                <Route path={"/helldiver-guide"} element={<HelldiverGuide/>}/>
                <Route path={"/bestiary/:faction"} element={<Bestiary/>}/>
                <Route path={"*"} element={<Navigate to={"/home"} replace/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
