import { Link } from "remix";
export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="curbs">
        <Link to="/">
        <img src="/PastedGraphic.png" alt="" className="logo-two" />
        </Link>
      </div>
    </div>
    
  );
}
