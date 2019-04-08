class Pirate {
  constructor(name, job) {
    this.name = name;
    job === undefined ? 
      this.job = 'Scallywag' : 
      this.job = job;
    this.cursed = false;
    this.acts = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.acts++;
    if (this.acts >= 3) {
      this.cursed = true;
    }
  }

  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }
}

module.exports = Pirate;