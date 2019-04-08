class Wizard {
  constructor(wizObj) {
      this.name = wizObj.name;
      this.bearded = true;
      if (wizObj.bearded === false) {
          this.bearded = false;
      this.isRested = true;
      this.spells = 0;
      }
  }

  incantation(words) {
      return words.toUpperCase();
  }

  cast() {
      this.spells++;
      if (this.spells >= 3) {
          this.isRested = false;
          return 'I SHALL NOT CAST';
      }
      return "MAGIC BULLET";
  }
}

module.exports = Wizard;