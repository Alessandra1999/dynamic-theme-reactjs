import { useContext } from "react";
import { DynamicThemeContext } from "./DynamicThemeContext";

const ThemeSelector = () => {
    const { setTheme } = useContext(DynamicThemeContext);

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    return (
        <div>
            <label htmlFor="theme">Selecione o tema que preferir: </label>
            <select id="theme" onChange={handleThemeChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="blue">Blue</option>
                <option value="peach">Peach</option>
                <option value="pink">Pink</option>
                <option value="green">Green</option>
            </select>
        </div>
    )
}

export default ThemeSelector