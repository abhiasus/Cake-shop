import { FaMotorcycle, FaMedal, FaLeaf, FaLock } from 'react-icons/fa'

const badges = [
  { icon: <FaMotorcycle />, title: 'Fast Delivery', sub: 'On time, every time' },
  { icon: <FaMedal />, title: 'Best Quality', sub: 'Premium ingredients' },
  { icon: <FaLeaf />, title: '100% Fresh', sub: 'Baked fresh for you' },
  { icon: <FaLock />, title: 'Secure Payments', sub: '100% secure checkout' },
]

export default function TrustBadges() {
  return (
    <div className="trust-strip" data-aos="fade-up">
      <div className="container trust-inner">
        {badges.map((b, i) => (
          <div className="trust-item" key={i}>
            <div className="trust-icon">{b.icon}</div>
            <div>
              <h6>{b.title}</h6>
              <small>{b.sub}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}