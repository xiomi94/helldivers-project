import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import Home from "./pages/home/Home.tsx";
import Bestiary from "./pages/bestiary/Bestiary.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import "./App.css"
import BestiaryFaction from "./pages/bestiary-faction/BestiaryFaction.tsx";
import AdminMissions from "./pages/admin-missions/AdminMissions.tsx";


function App() {

  return (
    <div className="app-container">
      <BrowserRouter basename="/helldivers-project">
        <Header/>
        <main className="main-container">
          <Routes>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={""} element={<Home/>}/>
            <Route path={"/bestiary"} element={<Bestiary/>}/>
            <Route path={"/bestiary/:faction"} element={<BestiaryFaction/>}/>
            <Route path={"/admin-missions"} element={<AdminMissions/>}/>
            <Route path={"*"} element={<Navigate to={"/home"} replace/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
