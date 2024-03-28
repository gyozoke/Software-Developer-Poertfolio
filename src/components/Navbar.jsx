import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="navbar">
      <Link to={"/LandingPage"}>
        <button className="exitbutton">Exit</button>
      </Link>
    </section>
  );
}

export default Navbar;
