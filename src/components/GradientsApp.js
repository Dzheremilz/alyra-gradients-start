import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"
import { gradients } from "../gradients"
import { useState } from "react"

const GradientsApp = ({ darkMode }) => {
  const [filter, setFilter] = useState("all")
  return (
    <main className="container">
      <h1 className={`text-center my-4 ${darkMode ? "text-white" : ""}`}>Alyra Gradients</h1>
      <GradientsSelect filter={filter} setFilter={setFilter} darkMode={darkMode} />
      <GradientsList gradients={gradients} filter={filter} setFilter={setFilter} darkMode={darkMode} />
    </main>
  )
}

export default GradientsApp