/*
function makeDeck(suits, values) {
  const deck = [];
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

deck = makeDeck(suits, values);
console.table(deck);
*/

const myDeck = {
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,Jack,Queen,King,Ace',
  deck: [],
  drawnCards: [],
  initialiseDeck() {
    const { suits, values, deck } = this;
    for (let suit of suits) {
      for (let value of values.split(',')) {
        deck.push({ suit, value });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(num) {
    const cards = [];
    for (let i = 0; i < num; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const { deck } = this;
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

myDeck.initialiseDeck();
console.table(myDeck.deck);
const card = myDeck.drawCard();
console.log(`Your card is ${card.value} of ${card.suit}`);
myDeck.shuffle();
console.table(myDeck.deck);

// make a deck factory (new instance of object) - returns new object to variable when assigned
const makeDeck = () => {
  return {
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,Jack,Queen,King,Ace',
    deck: [],
    drawnCards: [],
    initialiseDeck() {
      const { suits, values, deck } = this;
      for (let suit of suits) {
        for (let value of values.split(',')) {
          deck.push({ suit, value });
        }
      }
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(num) {
      const cards = [];
      for (let i = 0; i < num; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const { deck } = this;
      for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};
