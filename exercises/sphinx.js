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
        if (this.riddles.length === 0) {
          return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"Halfway, after that it\'s running out.\"???'
        }
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      } else {
        this.counter++;
        if (this.counter++ === this.riddles.length) {
          this.heroesEaten++;
        }
      }
    } 
  } 
}

module.exports = Sphinx;