import { Link } from "react-router-dom";

const Dropdown = ({ data, leaveEvent }) => {
  return (
    <>
      <ul className="nav-dropdown-content" onMouseLeave={leaveEvent}>
        {/* Contenuto della tendina */}

        {
          data.map((item) => (
            <Link>
              <li key={item.id} className="nav-components-dropdown-card">
                <img src={item.image} alt={`${item.text} icon`} />
                {item.text}
              </li>
            </Link>
          ))
        }
      </ul>
    </>
  )
}

export default Dropdown;