import Gradient from "./Gradient"

const GradientsList = ({ gradients, filter, setFilter }) => {
  if (filter !== "all") {
    gradients = gradients.filter((elem) => elem.tags.includes(filter))
  }
  return (
    <ul className="row list-unstyled">
      {gradients.map((elem) => (
        <Gradient name={elem.name} start={elem.start} end={elem.end} tags={elem.tags} filter={filter} setFilter={setFilter} key={elem.name} />
      ))}
    </ul>
  )
}

export default GradientsList