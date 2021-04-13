const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? "bg-white" : "bg-dark text-white"} text-center p-3 mt-auto`}>
      Made with Love for Alyra
    </footer>
  )
}

export default Footer