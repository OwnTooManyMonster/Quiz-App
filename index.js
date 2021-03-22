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

let button = document.querySelectorAll('button')
let para_quest = document.querySelectorAll('.para_quest')
let div_answer = document.querySelectorAll('.div_answer')
let para_answer = document.createElement('h2')
para_answer.classList.add('para_answer')
para_answer.textContent = 'Hier könnte Ihre Werbung stehen!'

for (let i = 0; i < button.length; i++) {
  // problem 1  clicking on button second erase all para quest
  button[i].addEventListener('click', () => {
    //Where to index ? Solution QuerrySelctorAll i for all remove

    para_quest[i].remove()
    button[i].textContent = 'Hide Answer'
    div_answer[i].append(para_answer)
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
