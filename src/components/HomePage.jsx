import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <section className="homebuttonscard">
        <Link to={"/Aboutme"}>
          <button className="homebutton">About me</button>
        </Link>
        <Link to={"/Projects"}>
          <button className="homebutton">Projects</button>
        </Link>
        <Link to={"/Contactme"}>
          <button className="homebutton">Contact</button>
        </Link>
      </section>
    </>
  );
}

export default HomePage;
