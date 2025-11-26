import { Outlet } from "react-router-dom" // Quitamos /dist, ya que es innecesario
// 🚨 Importación NOMBRADA del componente ScrollToTop
import { ScrollToTop } from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <> {/* Usamos un fragmento (<>) para agrupar los elementos */}
            {/* 🚨 ScrollToTop se coloca como un ELEMENTO simple, no como un contenedor */}
            <ScrollToTop /> 
            
            <Navbar />
            <main>
                <Outlet /> {/* Outlet debe estar dentro de un contenedor principal como <main> o <div> */}
            </main>
            <Footer />
        </>
    )
}