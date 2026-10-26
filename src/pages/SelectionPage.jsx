import { Link } from 'react-router-dom'
import Section from '../components/ui/Section.jsx'
import EmptyState from '../components/ui/EmptyState.jsx'
import PartCard from '../components/parts/PartCard.jsx'
import PartSelectionFormPreview from '../components/selection/PartSelectionFormPreview.jsx'
import { categories } from '../data/parts.js'

export default function SelectionPage({ part }) {
  return (
    <>
      <Section id="selection" title="Підбір за автомобілем">
        <p>
          Вкажіть марку, модель і рік випуску автомобіля, щоб підібрати сумісні
          запчастини.
        </p>
        <PartSelectionFormPreview
          idPrefix="selection-preview"
          categories={categories}
        />
      </Section>

      <Section id="selection-result" title="Приклад результату підбору">
        {part ? (
          <>
            <p>Для перевірки макета показано один предмет із каталогу.</p>
            <div className="result-preview">
              <PartCard item={part} />
            </div>
          </>
        ) : (
          <EmptyState title="Немає запчастини для прикладу.">
            <p>
              <Link to="/">Переглянути каталог</Link>
            </p>
          </EmptyState>
        )}
      </Section>
    </>
  )
}
