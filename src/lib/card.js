export function createCard(card, index) {
  const cardSection = document.createElement('div')
  cardSection.classList.add('cardSection')

  const bookmark_card = document.createElement('div')
  bookmark_card.classList.add('bookmark-card')
  cardSection.append(bookmark_card)

  const icon_card = document.createElement('i')
  icon_card.classList.add('bookmarkicon1', 'lni', 'lni-bookmark')
  bookmark_card.append(icon_card)

  const h2Title = document.createElement('h2')
  h2Title.textContent = `Question ${index}`
  cardSection.append(h2Title)

  const div_quest = document.createElement('div')
  div_quest.classList.add('div_quest')
  cardSection.append(div_quest)

  const para_quest = document.createElement('p')
  para_quest.classList.add('.para_quest')
  para_quest.textContent = card.quest
  div_quest.append(para_quest)

  const div_button = document.createElement('div')
  div_button.classList.add('div_button')
  cardSection.append(div_button)

  const button = document.createElement('button')
  button.classList.add('button1')
  button.textContent = 'Show Answer'
  div_button.append(button)

  const div_answer = document.createElement('div')
  div_answer.classList.add('div_answer')
  cardSection.append(div_answer)

  const para_answer = document.createElement('p')
  para_answer.classList.add('para_answer')
  para_answer.textContent = card.answer
  div_answer.append(para_answer)

  const tab_area = document.createElement('div')
  tab_area.classList.add('tab_area')
  tab_area.textContent = card.tag
  cardSection.append(tab_area)

  bookmark_card.addEventListener('click', () => {
    bookmark_card.classList.toggle('bookmark-card')
    bookmark_card.classList.toggle('bookmark-card2')
  })

  for (let i = 0; i < button.length; i++) {
    // problem 1  clicking on button second erase all para quest
    button[i].addEventListener('click', () => {
      if (button[i].textContent == 'Show Answer') {
        button[i].textContent = 'Hide Answer'
      } else {
        button[i].textContent = 'Show Answer'
        const para_quest = document.createElement('p')
        para_quest.textContent = ' Lorem ipsum dolor sit amet'
        div_quest[i].append(para_quest)
      }
    })
  }

  return cardSection
}
