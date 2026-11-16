import { FaHeart, FaStar } from 'react-icons/fa'
import chocolate from '../assets/images/product-chocolate.jpg'
import redvelvet from '../assets/images/product-redvelvet.jpg'
import blackforest from '../assets/images/product-blackforest.jpg'
import mango from '../assets/images/product-mango.jpg'

const products = [
  { img: chocolate, name: 'Chocolate Delight', rating: 5, reviews: 120, price: 'Rs. 2,499' },
  { img: redvelvet, name: 'Red Velvet Cake', rating: 4, reviews: 98, price: 'Rs. 2,699' },
  { img: blackforest, name: 'Black Forest Cake', rating: 5, reviews: 110, price: 'Rs. 2,399' },
  { img: mango, name: 'Mango Cake', rating: 4, reviews: 85, price: 'Rs. 2,299' },
]

export default function BestSellers() {
  return (
    <section className="section-pad bg-alt" id="cakes">
      <h2 className="section-title" data-aos="fade-up">Best Sellers</h2>
      <div className="container products-wrap">
        {products.map((p, i) => (
          <div className="product-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="product-img-wrap">
              <img src={p.img} alt={p.name} />
              <button className="wishlist-btn" aria-label="Add to wishlist">
                <FaHeart />
              </button>
            </div>
            <div className="product-info">
              <h6>{p.name}</h6>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FaStar key={idx} className={idx < p.rating ? 'filled' : 'empty'} />
                ))}
                <span> ({p.reviews})</span>
              </div>
              <div className="price">{p.price}</div>
              <button className="btn btn-primary-custom w-100">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}