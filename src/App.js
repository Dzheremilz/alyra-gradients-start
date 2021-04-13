import GradientsApp from "./components/GradientsApp"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`App min-vh-100 d-flex flex-column ${darkMode ? "bg-dark" : ""}`}>
      <GradientsHeader darkMode={darkMode} setDarkMode={setDarkMode} >
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <GradientsApp darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
