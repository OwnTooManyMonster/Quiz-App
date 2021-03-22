let bookmark_cards = document.querySelectorAll('.bookmark-card')
//Die Methode querySelector() von Document gibt das erste Element innerhalb eines Dokuments zurück, welches dem angegebenen Selektor bzw. Selektoren entspricht. Wurden keine Übereinstimmungen gefunden wird null zurückgegeben.
//Die Methode querySelectorAll() von Document gibt eine statische (nicht live) NodeList (en-US) zurück, die eine Liste der Elemente des Dokuments darstellt, die mit der angegebenen Selektorgruppe übereinstimmen.
for (let i = 0; i < bookmark_cards.length; i++) {
  //for ([initialization]; [condition]; [final-expression])

  bookmark_cards[i].addEventListener('click', () => {
    bookmark_cards[i].classList.toggle('bookmark-card')
    bookmark_cards[i].classList.toggle('bookmark-card2')
  })
}

const button = document.querySelectorAll('button')
const para_quest = document.querySelectorAll('.para_quest')
const div_answer = document.querySelectorAll('.div_answer')
const para_answer = document.createElement('p')

const div_quest = document.querySelectorAll('.div_quest')

para_answer.classList.add('para_answer')
para_answer.textContent = 'Hier könnte Ihre Werbung stehen!'

for (let i = 0; i < button.length; i++) {
  // problem 1  clicking on button second erase all para quest
  button[i].addEventListener('click', () => {
    if (button[i].textContent == 'Show Answer') {
      para_quest[i].remove()
      button[i].textContent = 'Hide Answer'
      div_answer[i].append(para_answer)
    } else {
      button[i].textContent = 'Show Answer'
      const para_quest = document.createElement('p')
      para_quest.textContent =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore aspernatur necessitatibus repellendus possimus voluptate adipisci nobis! Reprehenderit id recusandae laudantium consequatur! Animi suscipit sapiente possimus eos pariatur optio fugiat. '
      div_quest[i].append(para_quest)

      //Where to index ? Solution QuerrySelctorAll i for all remove
    }
    // [i] wird benötigt um die Verankerung auf das oben geschaffene Array herzustellen
  })
}

//const namesList = ['David', 'Marwin', 'Martin']

//namesList.forEach(name => console.log(name))

/*

namesList.forEach(logName)

function logName(name) {
    console.log(name)
}

/*
 let div_answer = document.querySelector('div_answer')
    let para_answer = document.createElement('para_answer')
    div_answer.insertBefore()
    targetElement.insertAdjacentElement(position, element);
    para_answer.textContent = 'Hier könnte Ihre Werbung stehen!'
    div_answer.append(div_answer)
    div_answer.classList.add('para_answer'  */
