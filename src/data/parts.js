export const parts = [
  {
    "id": "part-001",
    "name": "Гальмівні колодки передні",
    "article": "BC-4412",
    "brand": "Toyota",
    "category": "Гальмівна система",
    "price": 1450,
    "available": true,
    "description": "Комплект із чотирьох колодок для щоденної експлуатації."
  },
  {
    "id": "part-002",
    "name": "Оливний фільтр",
    "article": "OF-1180",
    "brand": "Volkswagen",
    "category": "Фільтри",
    "price": 320,
    "available": true,
    "description": "Змінний фільтр для планового технічного обслуговування."
  },
  {
    "id": "part-003",
    "name": "Амортизатор задній",
    "article": "SA-7731",
    "brand": "Renault",
    "category": "Підвіска",
    "price": 2100,
    "available": false,
    "description": "Газомасляний амортизатор, постачання очікується наступного тижня."
  },
  {
    "id": "part-004",
    "name": "Свічка запалювання",
    "article": "SP-2205",
    "brand": "Ford",
    "category": "Запалювання",
    "price": 260,
    "available": true,
    "description": "Іридієва свічка з підвищеним ресурсом роботи."
  },
  {
    "id": "part-005",
    "name": "Ремінь ГРМ",
    "article": "TB-9080",
    "brand": "Hyundai",
    "category": "Двигун",
    "price": 1180,
    "available": true,
    "description": "Ремінь газорозподільного механізму з армованим кордом."
  }
]

export const categories = [...new Set(parts.map((part) => part.category))]

