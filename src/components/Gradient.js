import GradientPill from "./GradientPill"
import GradientTitle from "./GradientTitle"
import GradientCode from "./GradientCode"
import GradientTags from "./GradientTags"

const Gradient = ({ start, end, name, tags, filter, setFilter }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={start} colorEnd={end} />
        <GradientTitle children={name} />
        <GradientCode colorStart={start} colorEnd={end} />
        <GradientTags tags={tags} filter={filter} setFilter={setFilter} />
      </div>
    </li>
  );
};

export default Gradient