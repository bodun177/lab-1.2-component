export default function AvailabilityBadge({ available }) {
  const label = available ? 'Є в наявності' : 'Немає в наявності'
  const className = available ? 'status available' : 'status unavailable'

  return <span className={className}>{label}</span>
}
