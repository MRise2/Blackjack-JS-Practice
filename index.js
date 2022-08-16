let player = {
  name: "Player",
  chips: 200
}

let cards = [] // array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
// let sumEl = document.querySelector("#sum-el")
// querySelector = specifically calling a selector or an id "#", same applies to using class "."

playerEl.textContent = player.name + ": $" + player.chips

// random number between 1-11
function getRandomCard() {
  let randomCard = Math.floor(Math.random()* 13) + 1
  if (randomCard > 10) {
    return 10
  } else if (randomCard === 1){
    return 11
  } else {
    return randomCard
  }
}


function startGame() {
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  isAlive = true
  renderGame()
}

function renderGame() {
  // render out firstCard and secondCard
  cardsEl.textContent = "Cards: "
  // for loop that renders out all the cards
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  // render out ALL the cards we have
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Want to draw a card?"
  } else if (sum === 21) {
    message = "Blackjack!"
    hasBlackJack = true
  } else {
    message = "You lose!"
    isAlive = false
  } 
  messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    // pushing the card to the cards array
    cards.push(card)
    renderGame()
  }
}
