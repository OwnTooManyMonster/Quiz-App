const data = []
let inputQuest
let inputAnswer
let inputTag

const form = document.querySelector('form')
const button = document.querySelector('button')

form.addEventListener('submit', event => {
  event.preventDefault()

  inputQuest = form['quest']
  inputAnswer = form['answer']
  inputTag = form['tag']

  let QuestData = {
    quest: inputQuest.value,
    answer: inputAnswer.value,
    tag: inputTag.value,
  }

  data.push(QuestData)

  console.log(data)
  form.reset()
})
