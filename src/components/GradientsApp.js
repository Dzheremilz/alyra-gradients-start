import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"
import { gradients } from "../gradients"
import { useState } from "react"

const GradientsApp = () => {
  const [filter, setFilter] = useState("all")
  return (
    <>
      < main className="container" >
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <GradientsSelect filter={filter} setFilter={setFilter} />
        <GradientsList gradients={gradients} filter={filter} setFilter={setFilter} />
      </main >
    </>)
}

export default GradientsApp