export default function Hero() {
    return (
        <section id="home" className="hero">  
        <div className="hero-photo"> Photo </div>

         <div className="hero-text">
        <p className="hero-hello">Hi, I'm</p>
        <h1>Kallina Joseph</h1>
        <p className="hero-tagline">Your tagline goes here.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View projects</a>
          <a href="#contact" className="btn-outline">Contact me</a>
        </div>
      </div>
        </section>
    )
}