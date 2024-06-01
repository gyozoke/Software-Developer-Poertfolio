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
            href="https://drive.google.com/file/d/1Mkl2xx2ooGa4HACX-ZKni9lbRNP1pmNU/view?usp=drive_link"
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
