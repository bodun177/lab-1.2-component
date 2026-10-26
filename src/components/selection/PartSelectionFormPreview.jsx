import AppButton from '../ui/AppButton.jsx'
import FormField from '../ui/FormField.jsx'

const currentYear = new Date().getFullYear()

const brands = ['Toyota', 'Volkswagen', 'Renault', 'Ford', 'Hyundai']

export default function PartSelectionFormPreview({ idPrefix, categories }) {
  const brandId = `${idPrefix}-brand`
  const modelId = `${idPrefix}-model`
  const yearId = `${idPrefix}-year`
  const categoryId = `${idPrefix}-category`
  const noticeId = `${idPrefix}-notice`

  return (
    <form
      aria-label="Макет підбору запчастини"
      aria-describedby={noticeId}
      onSubmit={(event) => event.preventDefault()}
    >
      <p id={noticeId}>
        Це макет для перевірки структури полів. Дані не зберігаються.
      </p>

      <FormField id={brandId} label="Марка автомобіля">
        <select id={brandId} name="brand" defaultValue="">
          <option value="">Оберіть марку</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        id={modelId}
        label="Модель"
        hint="Наприклад, Corolla або Golf."
      >
        <input
          id={modelId}
          name="model"
          type="text"
          defaultValue=""
          aria-describedby={`${modelId}-hint`}
        />
      </FormField>

      <FormField id={yearId} label="Рік випуску">
        <input
          id={yearId}
          name="year"
          type="number"
          min="1990"
          max={currentYear}
          defaultValue=""
        />
      </FormField>

      <FormField id={categoryId} label="Категорія запчастини">
        <select id={categoryId} name="category" defaultValue="">
          <option value="">Усі категорії</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </FormField>

      <div className="form-actions">
        <AppButton type="reset" variant="secondary">
          Очистити
        </AppButton>
        <AppButton disabled>Підбір буде доступний пізніше</AppButton>
      </div>
    </form>
  )
}
