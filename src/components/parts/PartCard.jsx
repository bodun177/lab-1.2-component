import AvailabilityBadge from './AvailabilityBadge.jsx'

function formatPrice(price) {
  return `${price.toLocaleString('uk-UA')} ₴`
}

export default function PartCard({ item }) {
  return (
    <article className="part-card">
      <h3>{item.name}</h3>
      <p className="part-meta">
        Артикул: {item.article} · {item.brand}
      </p>
      <p className="category">{item.category}</p>
      <p>{item.description}</p>
      <p className="part-price">{formatPrice(item.price)}</p>
      <p>
        <AvailabilityBadge available={item.available} />
      </p>
    </article>
  )
}
