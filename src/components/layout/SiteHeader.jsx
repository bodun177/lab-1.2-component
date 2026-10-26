import MainNav from '../navigation/MainNav.jsx'
import Title from '../ui/Title.js'

export default function SiteHeader({ title, links }) {
  return (
    <header className="site-header">
      <Title>{title}</Title>
      <MainNav links={links} />
    </header>
  )
}
