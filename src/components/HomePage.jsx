import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <section className="homebuttonscard">
        <div className="buttonpair">
          <Link to={"/Aboutme"}>
            <button className="homebutton">About me</button>
          </Link>
          <Link to={"/Projects"}>
            <button className="homebutton">Projects</button>
          </Link>
        </div>
        <div className="buttonpair">
          <Link to={"/Contactme"}>
            <button className="homebutton">Contact</button>
          </Link>
          <a
            href="https://docs.google.com/document/export?format=pdf&id=1Y-1bVq6nSDeLfRFcQMrlu8pt90tPz2Jzr6-onzglqaY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="homebutton">Download CV</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default HomePage;
