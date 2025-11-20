import "./App.css"
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import MyNavbar from "./components/Navbar/MyNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

    useEffect(()=>{
        AOS.init();
    } , [])

    return (
        <>
            <MyNavbar />
            <Header />
            <Hero />
        </>
    )
}

export default App;