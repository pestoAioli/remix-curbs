import { Link } from "remix";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="curbs">
        <Link to="/">
        <h1>Curbs:-)</h1>
        </Link>
      <div className="add-spot">
        <button className="button">
          <Link to="./new">Add a Spot :-)</Link>
          
        </button>
      </div>
      </div>
    </div>
    
  );
}
