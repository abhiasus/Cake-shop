import heroCake from '../assets/images/hero-cake.png'

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h1 className="hero-title">
              Handcrafted Cakes<br />for <span>Every Celebration</span>
            </h1>
            <p className="hero-sub">
              Baked fresh with premium ingredients and delivered straight to your
              door — because every moment deserves something sweet.
            </p>
            <div className="hero-btns">
              <a href="#shop" className="btn btn-primary-custom">Shop Now</a>
              <a href="#custom" className="btn btn-outline-custom">Custom Cake</a>
            </div>
          </div>
          <div className="col-lg-6 text-center" data-aos="fade-left" data-aos-delay="150">
            <div className="hero-img-wrap">
              <img src={heroCake} alt="Signature cake" className="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}