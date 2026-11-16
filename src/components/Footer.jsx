import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div>
          <h5 className="brand-logo">Velvet<span>Crumb</span></h5>
          <p>We bake more than cakes — we bake happiness. Thank you for choosing us.</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h6>Quick Links</h6>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#cakes">Best Sellers</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h6>Customer Service</h6>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns &amp; Refund</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h6>Newsletter</h6>
          <p>Subscribe to get updates on new cakes and offers.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Velvet Crumb. All Rights Reserved.</div>
    </footer>
  )
}