import React from "react"
import { gradients } from "../gradients"

const IconLeft = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-arrow-left"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
      />
    </svg>
  );
};

const Icon = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-arrow-clockwise"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
      />
      <path
        d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
      />
    </svg>
  );
};

const IconRight = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-arrow-right"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </svg>
  );
};

const GradientsHeader = (props) => {
  const { children, darkMode, setDarkMode } = props;

  const [gradientIndex, setGradientIndex] = React.useState(
    Math.floor(Math.random() * gradients.length)
  );

  const handleReloadClick = () => {
    setGradientIndex(Math.floor(Math.random() * gradients.length));
  };

  const handleLeftClick = () => {
    if (gradientIndex === 0) {
      setGradientIndex(gradients.length - 1);
    } else {
      setGradientIndex(gradientIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (gradientIndex === gradients.length - 1) {
      setGradientIndex(0);
    } else {
      setGradientIndex(gradientIndex + 1);
    }
  };

  const backgroundImage = `linear-gradient(to right, ${gradients[gradientIndex].start}, ${gradients[gradientIndex].end} )`;
  const style = {
    backgroundImage
  };
  return (
    <header className="text-center bg-dark text-white py-5 mb-5" style={style}>
      {children}
      <button
        type="button"
        className="btn btn-outline-light m-1"
        aria-label="Afficher le dégradé précédant"
        onClick={handleLeftClick}
      >
        <IconLeft />
      </button>
      <button
        type="button"
        className="btn btn-outline-light m-1"
        aria-label="Changer le fond"
        onClick={handleReloadClick}
      >
        <Icon />
      </button>
      <button
        type="button"
        className="btn btn-outline-light m-1"
        aria-label="Afficher le dégradé suivant"
        onClick={handleRightClick}
      >
        <IconRight />
      </button>
      <button type="button" className="btn btn-outline-light m-1" aria-label="Toggle dark mode" onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
    </header>
  );
};

export default GradientsHeader