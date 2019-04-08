class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
    this.counter = 0;
  }

  collectRiddle(riddle) { 
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (answer === this.riddles[i].answer) {
        this.riddles.splice([i], 1);
      }
    } return 'That wasn\'t that hard, I bet you don\'t get the next one'
  } 
}

module.exports = Sphinx;

// if (this.counter === this.riddles.length) {
//   this.heroesEaten++;
// }

// attemptAnswer(answer) {
//   this.counter++;
//   for (var i = 0; i < this.riddles.length; i++) {
//     if (answer === this.riddles[i].answer) {
//       this.riddles.splice([i], 1);
//     } return 'That wasn\'t that hard, I bet you don\'t get the next one'
//   }
// } 