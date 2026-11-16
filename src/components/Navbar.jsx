import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {
  return (
    <>
      <div className="top-strip text-center py-1">
        Delivering happiness to your doorstep! 🍰 &nbsp;|&nbsp; +11 111 111 
      </div>
      <nav className="navbar navbar-expand-lg main-nav px-4 py-3">
        <div className="container-fluid">
          <a className="navbar-brand brand-logo" href="#home">
            Velvet<span>Crumb</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navMenu">
            <ul className="navbar-nav gap-4">
              <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#shop">Shop</a></li>
              <li className="nav-item"><a className="nav-link" href="#cakes">Cakes</a></li>
              <li className="nav-item"><a className="nav-link" href="#custom">Occasions</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="nav-icons d-flex gap-3 align-items-center">
            <FaSearch />
            <FaUser />
            <div className="cart-icon">
              <FaShoppingCart />
              <span className="cart-badge">0</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}