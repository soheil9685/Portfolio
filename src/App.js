import "./App.css"
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import MyNavbar from "./components/Navbar/MyNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SkillItem from "./components/Skills/SkillItem";
import ProjectItem from "./components/Projects/ProjectItem";
import Contact from "./components/Contact/Contact";

function App() {

    useEffect(()=>{
        AOS.init();
    } , [])

    return (
        <>
            <MyNavbar />
            <Header />
            <Hero />
            <SkillItem />
            <ProjectItem />
            <Contact />
        </>
    )
}

export default App;