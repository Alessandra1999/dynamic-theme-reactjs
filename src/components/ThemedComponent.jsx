import { useContext, useEffect } from "react";
import { DynamicThemeContext } from "./DynamicThemeContext";

const ThemedComponent = () => {
    const { theme } = useContext(DynamicThemeContext);

    useEffect(() => {
        document.body.style.backgroundColor = theme.background;
        document.body.style.color = theme.color;
    }, [theme]);

    return (
        <div>
            <h1>Olá, clique nas opções e escolha o tema que preferir!</h1>
            <p>Você pode escolher entre os temas Light, Dark, Blue, Peach, Pink e Green.</p>
        </div>
    )
}

export default ThemedComponent