import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="navbar">
      <Link to={"/HomePage"}>
        <img
          className="logo"
          src="https://i.ibb.co/Yhsc1V7/Logo.png"
          alt="Logo"
          border="0"
        ></img>
      </Link>
      <Link to={"/LandingPage"}>
        <button className="exitbutton">Exit</button>
      </Link>
    </section>
  );
}

export default Navbar;
