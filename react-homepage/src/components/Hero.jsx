

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          Build Your <span>Digital Future</span>
        </h1>

        <p className="hero-description">
          We create modern, responsive and user-friendly
          websites to help your business grow online.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
          alt="image "
        />
      </div>
    </section>
  );
}

export default Hero;
