const GradientTags = ({ tags, filter, setFilter, darkMode }) => {
  return (
    <div className="mt-3">
      {tags.sort().map((elem) => (
        <button type="button" className={elem === filter ? `btn btn-sm me-2 mb-2 ${darkMode ? "bg-dark text-white" : "bg-light"}` : `btn btn-sm me-2 mb-2 ${darkMode ? "bg-white" : "text-white bg-dark"}`} disabled={elem === filter} onClick={() => setFilter(elem)} key={elem} >{elem}</button>
      ))}
    </div>
  )
}

export default GradientTags