import { createContext, useState } from "react";

export const DynamicThemeContext = createContext();

export const DynamicThemeProvider = (props) => {
    const [theme, setTheme] = useState('light');

    const themes = {
        light: {
            background: '#ffffff',
            color: '#000'
        },

        dark: {
            background: '#000',
            color: '#ffffff'
        },

        blue: {
            background: '#9fddff',
            color: '#012b52'
        },

        peach: {
            background: '#f6dbcb',
            color: '#df5c11'
        },

        pink: {
            background: '#ffbcf0',
            color: '#ee3478'
        },

        green: {
            background: '#cade91',
            color: '#3a4e01'
        }
    }

    const value = {
        theme: themes[theme],
        setTheme
    }

    return (
        <DynamicThemeContext.Provider value={value}>
            {props.children}
        </DynamicThemeContext.Provider>

    )
}