import { Link } from "react-router-dom";

const Dropdown = ({ data, leaveEvent }) => {
  return (
    <>
      {
        data && (
          <div className="nav-dropdown-content" onMouseLeave={leaveEvent}>
            {data.map((item) => (
              <Link to={item.path} onClick={leaveEvent} className="nav-components-dropdown-card" key={item.id}>
                <img src={item.image} alt={`${item.text} icon`} />
                {item.text}
              </Link>
            ))}
          </div>
        )}
    </>
  );
};

export default Dropdown;
