import Section from '../components/ui/Section.jsx'

export default function AboutPage() {
  return (
    <Section id="about-page" title="Про застосунок">
      <p>
        «Автозапчастини» — навчальний вебзастосунок для пошуку та підбору
        автомобільних запасних частин.
      </p>
      <dl className="info-list">
        <dt>Тема</dt>
        <dd>
          Розробка вебзастосунку для пошуку та підбору автомобільних запасних
          частин
        </dd>
        <dt>Етап</dt>
        <dd>Лабораторна робота 1.2 — компонентна архітектура</dd>
        <dt>Стек</dt>
        <dd>ReactJS, React Router, styled-components, власні CSS стилі</dd>
      </dl>
      <p>
        Пошук, фільтри та збереження заявок з'являться в наступних лабораторних
        роботах.
      </p>
    </Section>
  )
}
