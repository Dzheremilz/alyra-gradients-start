const GradientPill = ({ colorStart, colorEnd }) => {
  const divStyle = {
    backgroundImage: `linear-gradient(to right, ${colorStart}, ${colorEnd})`
  };
  return (
    <div
      className="card-gradient rounded-pill mx-auto mb-4"
      style={divStyle}
    ></div>
  );
};

export default GradientPill