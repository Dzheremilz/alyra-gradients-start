const GradientTags = ({ tags, filter, setFilter }) => {
  return (
    <div className="mt-3">
      {tags.sort().map((elem) => (
        <button type="button" className={elem === filter ? "btn btn-sm me-2 mb-2 bg-light" : "btn btn-sm me-2 mb-2 bg-dark text-white"} disabled={elem === filter} onClick={() => setFilter(elem)} key={elem}>{elem}</button>
      ))}
    </div>
  )
}

export default GradientTags