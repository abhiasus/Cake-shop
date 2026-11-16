
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {
  return (
    <>
      <div className="top-strip text-center py-1">
        Delivering happiness to your doorstep! 🍰 &nbsp;|&nbsp; +11 111 111
      </div>

      <nav className="navbar navbar-expand-lg main-nav px-4 py-3">
        <div className="container-fluid">

          {/* Logo */}
          <a className="navbar-brand brand-logo" href="#home">
            Velvet<span>Crumb</span>
          </a>

          {/* Navigation Links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navMenu"
          >
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#shop">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cakes">Cakes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#custom">Occasions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Icons */}
          <div className="nav-icons d-flex align-items-center">
            <FaSearch className="search-icon" />

            <FaUser className="user-icon" />

            <div className="cart-icon">
              <FaShoppingCart />
              <span className="cart-badge">0</span>
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>
    </>
  )
}
