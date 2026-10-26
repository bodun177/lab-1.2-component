import PartCard from './PartCard.jsx'
import EmptyState from '../ui/EmptyState.jsx'

export default function PartList({ items }) {
  if (items.length === 0) {
    return (
      <EmptyState title="Запчастини ще не додано.">
        <p>Після наповнення каталогу тут з'являться картки запчастин.</p>
      </EmptyState>
    )
  }

  return (
    <ul className="part-grid">
      {items.map((item) => (
        <li key={item.id}>
          <PartCard item={item} />
        </li>
      ))}
    </ul>
  )
}
