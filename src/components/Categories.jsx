import birthday from '../assets/images/category-birthday.jpg'
import wedding from '../assets/images/category-wedding.jpg'
import anniversary from '../assets/images/category-anniversary.jpg'
import photo from '../assets/images/category-photo.jpg'
import cupcake from '../assets/images/category-cupcake.jpg'

const cats = [
  { img: birthday, label: 'Birthday Cakes' },
  { img: wedding, label: 'Wedding Cakes' },
  { img: anniversary, label: 'Anniversary Cakes' },
  { img: photo, label: 'Photo Cakes' },
  { img: cupcake, label: 'Cupcakes' },
]

export default function Categories() {
  return (
    <section className="section-pad" id="shop">
      <h2 className="section-title" data-aos="fade-up">Shop by Category</h2>
      <div className="container cats-wrap">
        {cats.map((c, i) => (
          <div className="cat-item" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
            <div className="cat-circle">
              <img src={c.img} alt={c.label} />
            </div>
            <p>{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}