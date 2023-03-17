import "./Categories.css";
import { Link } from "react-router-dom";
import DataCategories from "../Data";

export default function Categories() {
  return (
    <div className="boxes">
      {Object.keys(DataCategories).map((key) => (
        <button className={key}>
          <Link to={`/details/${key}`}>{DataCategories[key].title}</Link>
        </button>
      ))}
    </div>
  );
}
