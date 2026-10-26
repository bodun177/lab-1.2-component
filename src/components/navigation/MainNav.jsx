import { NavLink } from 'react-router-dom'

export default function MainNav({ links }) {
  return (
    <nav aria-label="Основна навігація">
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
