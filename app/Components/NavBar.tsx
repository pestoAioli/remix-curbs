import { Link } from "remix";
import logo from "../PastedGraphic.png"
export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="curbs">
        <Link to="/">
        <img src={logo} alt="" className="logo-two" />
        </Link>
      </div>
    </div>
    
  );
}
