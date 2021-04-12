import { gradients, uniqueTags } from "../gradients"

const nbTags = (filter, gradients) => {
  return gradients.filter((elem) => elem.tags.includes(filter)).length
}

const GradientsSelect = ({ filter, setFilter }) => {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">Filtrer par tag</label>
      <select className="form-select" id="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all" key="all">Tous ({gradients.length})</option>
        {uniqueTags.sort().map((elem) => ( //Affichage par ordre alphabetique capitalize et le nombre de gradients par tag
          <option value={elem} key={elem}>{elem.charAt(0).toUpperCase() + elem.slice(1) + ' (' + nbTags(elem, gradients) + ')'}</option>
        ))}
      </select>
    </div>
  )
}

export default GradientsSelect