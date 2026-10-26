import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import SelectionPage from './pages/SelectionPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import { parts } from './data/parts.js'

const navigationLinks = [
  { to: '/', label: 'Каталог' },
  { to: '/selection', label: 'Підбір запчастини' },
  { to: '/about', label: 'Про застосунок' },
]

export default function App() {
  const examplePart = parts[0]

  return (
    <BrowserRouter>
      <AppLayout title="Автозапчастини" links={navigationLinks}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/selection" element={<SelectionPage part={examplePart} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
