class Werewolf {
  constructor(name, location) {
      this.name = name;
      this.location = location;
      this.human = true;
      this.wolf = false;
      this.hungry = false;
  }

  change() {
      this.human = !this.human;
      this.wolf = !this.wolf;
      this.hungry = !this.hungry;
  }

  eat(victim) {
      if (this.human === false) {
          victim.alive = false;
          this.human = !this.human;
          this.wolf = !this.wolf;
          this.hungry = !this.hungry;
      } else {
          return 'Get off of me, moron; what do you think, you\'re a werewolf or something?'
      }
  }
}

module.exports = Werewolf;