function Projects() {
  return (
    <>
      <section className="projects">
        <section className="tipper">
          <h1>Tipper</h1>
          <p>A tipping web application</p>
          <a href="https://front-end-eight-eta-57.vercel.app/" target="_blank">
            <img
              className="tipperimg"
              src="https://i.ibb.co/JKSjn0p/tipperimg.png"
              alt="tipperimg"
              border="0"
            ></img>
          </a>
          <a href="https://github.com/gyozoke/nc-news" target="_blank">
            <button className="tipperbtn">source code</button>
          </a>
        </section>
        <section className="ncnews">
          <h1>Nc-News</h1>
          <p>A news forum with articles coming form an API I built</p>
          <a href="https://victorncnews.netlify.app/" target="_blank">
            <img
              className="ncnewsimg"
              src="https://i.ibb.co/jf7YPD0/ncnewsimg.png"
              alt="ncnewsimg"
              border="0"
            ></img>
          </a>
          <a href="https://github.com/Tipper-final-project" target="_blank">
            <button className="ncnewsbtn">source code</button>
          </a>
        </section>
      </section>
    </>
  );
}

export default Projects;
