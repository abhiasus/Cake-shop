import customCake from '../assets/images/custom-cake.png'

export default function CustomBanner() {
  return (
    <section className="custom-banner" id="custom" data-aos="fade-up">
      <div className="container banner-inner">
        <div className="banner-text">
          <h2>Custom Cakes for<br /><span>Your Special Moments</span></h2>
          <p>Tell us your ideas — we'll bake your dreams into reality.</p>
          <a href="#contact" className="btn btn-light-custom">Order Custom Cake →</a>
        </div>
        <div className="banner-img">
          <img src={customCake} alt="Custom cake" />
        </div>
      </div>
    </section>
  )
}