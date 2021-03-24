import { pushSection } from './src/lib/db.js'

const form = document.querySelector('form')
const button = document.querySelector('button')

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputQuest = form['quest']
  const inputAnswer = form['answer']
  const inputTag = form['tag']

  const quest = inputQuest.value
  const answer = inputAnswer.value

  const itemsArray = itemsStringToArray(inputTag.value)

  pushSection({
    quest: quest,
    answer: answer,
    tag: itemsArray,
  })

  form.reset()
  alert('Section created!')
})

function itemsStringToArray(itemsString) {
  const itemsArray = itemsString.split(',')

  return itemsArray
}
