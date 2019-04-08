class Centaur {
  constructor(name, breed) {
      this.name =  name;
      this.breed = breed;
      this.cranky = false;
      this.standing = true;
      this.layingDown = false;
      this.counter = 0;
  }

  shoot() {
      this.counter++;
      if (this.counter >= 3) {
          this.cranky = true;
          return 'NO!';
      } else if (this.layingDown === true) {
          return 'NO!';
      } else {
          return 'Twang!!!';
      }
  }

  run() {
      this.counter++;
      if (this.counter >= 3) {
          this.cranky = true;
          return 'NO!';
      } else if (this.layingDown === true) {
          return 'NO!';
      } else {
          return 'Clop clop clop clop!!!';
      }
  }

  layDown() {
      this.standing = false;
      this.layingDown = true;
  }

  standUp() {
      this.standing = true;
      this.layingDown = false;
  }

  sleep() {
      if (this.standing === true) {
          return 'NO!';
      }    else {
          this.counter = 0;
          this.cranky = false;
          return 'ZZZZ';
      }
  }

  drinkPotion() {
      if (this.standing === true && this.counter != 0) {
          this.counter = 0;
          this.cranky = false;
      } else if (this.standing === true && this.counter === 0) {
          this.cranky = true;
      } else {
          return 'Not while I\'m laying down!';
      }
  }
}

module.exports = Centaur;