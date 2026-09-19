function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-top">
          <span className="hero-line"></span>
          <p>WEB DEVELOPER • CREATIVE BUILDER</p>
        </div>

        <h1>
          I build websites
          <span>that feel different.</span>
        </h1>

        <p className="hero-description">
          Modern, responsive and thoughtfully designed websites
          for businesses, brands and ideas that deserve a strong
          digital presence.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work
          </a>

          <a href="#contact" className="secondary-btn">
            Start a Conversation
          </a>
        </div>

        <div className="hero-bottom">
          <span>Based in India</span>
          <span>Available for freelance work</span>
        </div>

      </div>

      <div className="hero-decoration">
        <span>01</span>
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  )
}

export default Hero