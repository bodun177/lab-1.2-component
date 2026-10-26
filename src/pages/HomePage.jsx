import Section from '../components/ui/Section.jsx'
import CatalogSummary from '../components/parts/CatalogSummary.jsx'
import PartList from '../components/parts/PartList.jsx'
import { parts } from '../data/parts.js'

export default function HomePage() {
  return (
    <>
      <Section id="about" title="Про застосунок">
        <p>
          Каталог автомобільних запасних частин для пошуку та підбору деталей
          за маркою автомобіля.
        </p>
        <p>
          Перегляньте каталог, наявність і ціни, а потім перейдіть до підбору
          запчастини.
        </p>
        <p>
          <a className="text-link" href="#catalog">
            Перейти до каталогу
          </a>
        </p>
      </Section>

      <Section id="catalog" title="Каталог запчастин">
        <CatalogSummary total={parts.length} />
        <PartList items={parts} />
      </Section>
    </>
  )
}
