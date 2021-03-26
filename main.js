import { getSections } from './src/lib/db.js'
import { createCard } from './src/lib/card.js'

const mainBox = document.querySelector('.mainBox')
const data = getSections()

for (let i = 0; i < data.length; i++) {
  const cardSection = createCard(data[i], i + 1)
  mainBox.append(cardSection)
}
