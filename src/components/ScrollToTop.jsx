import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 

export const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Forzar el scroll al tope solo si la ruta cambia (sin importar el hash)
        window.scrollTo(0, 0); 
    }, [location.pathname]);

    return null; // No renderiza nada
};

// 🚨 Si tu importación en Layout aún usa 'import ScrollToTop from...',
// entonces DEBES cambiar el nombre del archivo para que coincida con la exportación por defecto,
// o usar la exportación por defecto aquí:
// export default ScrollToTop; 
// (Usaremos la corrección del Layout para usar la exportación nombrada, que es más limpia).