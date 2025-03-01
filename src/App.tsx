import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import Home from "./pages/home/Home.tsx";
import Enlist from "./pages/enlist/Enlist.tsx";
import Bestiary from "./pages/bestiary/Bestiary.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import "./App.css"


function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
        <Header/>
        <main className="main-container">
          <Routes>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={""} element={<Home/>}/>
            <Route path={"/enlist"} element={<Enlist/>}/>
            <Route path={"/bestiary"} element={<Bestiary/>}/>
            <Route path={"/bestiary/:faction"} element={<Bestiary/>}/>
            <Route path={"*"} element={<Navigate to={"/home"} replace/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
