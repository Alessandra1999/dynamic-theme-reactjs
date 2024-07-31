import { DynamicThemeProvider } from "./components/DynamicThemeContext"
import ThemedComponent from "./components/ThemedComponent"
import ThemeSelector from "./components/ThemeSelector"


function App() {

  return (
    <>
      <DynamicThemeProvider>
        <div>
          <ThemeSelector />
          <ThemedComponent />
        </div>
      </DynamicThemeProvider>
    </>
  )
}

export default App
