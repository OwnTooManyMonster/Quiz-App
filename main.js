import { data } from '../src/lib/db.js'
import { createCard } from '../src/lib/card.js'

const mainBox = document.querySelector('.mainBox')

for (let i = 0; i < data.length; i++) {
  const cardSection = createCard(data[i])
  mainBox.append(cardSection)
}
