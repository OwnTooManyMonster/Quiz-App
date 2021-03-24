export function createCard(card) {
  const cardSection = document.createElement("div");
  cardSection.classList.add("cardSection");

  const bookmark_card = document.createElement("div");
  bookmark_card.classList.add("bookmark-card");
  cardSection.append(bookmark_card);

  const icon_card = document.createElement("i");
  icon_card.classList.add("bookmarkicon1", "lni", "lni-bookmark");
  bookmark_card.append(icon_card);

  const h2Title = document.createElement("h2");
  h2Title.textContent = card.title;
  cardSection.append(h2Title);

  const div_quest = document.createElement("div");
  div_quest.classList.add("div_quest");
  cardSection.append(div_quest);

  const para_quest = document.createElement("p");
  para_quest.classList.add(".para_quest");
  para_quest.textContent = card.question;
  div_quest.append(para_quest);

  const div_button = document.createElement("div");
  div_button.classList.add("div_button");
  cardSection.append(div_button);

  const button = document.createElement("button");
  button.classList.add("button1");
  button.textContent = "Show Answer";
  div_button.append(button);

  const div_answer = document.createElement("div");
  div_answer.classList.add("div_answer");
  cardSection.append(div_answer);

  const tab_area = document.createElement("div");
  tab_area.classList.add("tab_area");
  tab_area.textContent = card.tags;
  cardSection.append(tab_area);

  return cardSection;
  /*cardSection.append(h2Title);

  const ulElement = document.createElement("ul");
  ulElement.classList.add("interest-box-items");

  cardSection.append(ulElement);

  for (let i = 0; i < card.items.length; i++) {
    const listItemElement = document.createElement("li");
    listItemElement.textContent = card.items[i];
    ulElement.append(listItemElement);
  }

  const likeButton = document.createElement("button");
  likeButton.classList.add("like-button", "", "");
  likeButton.textContent = "Like me!";

  likeButton.addEventListener("click", () => {
    console.log(card);
  });

  cardSection.append(likeButton);*/
}

/*
  <section class="interest-box">
    <h2>Video Games</h2>
    <ul class="interest-box-items">
      <li>Final Fantasy 7</li>
      <li>Metal Gear Solid</li>
      <li>Counter Strike: Global Offensive</li>
      <li>FIFA</li>
      <li>Battlefield V</li>
    </ul>
    <button> Like me </button>
  </section>
  */
