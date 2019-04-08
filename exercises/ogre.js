class Ogre {
  constructor(name, home) {
    this.name = name;
    if (home === undefined) {
      this.home = 'Swamp';
    } else {
      this.home = home;
    }
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
    if (human.encounterCounter !== 0 && human.encounterCounter % 3 === 0) {
      this.swings++;
    }
    if (this.swings === 2) {
      human.knockedOut = true;
    }
  }

  swingAt(human) {
    this.swings++;
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;