class Stark {
  constructor(name, location) {
    this.name = name;
    location === undefined ?
      this.location = 'Winterfell' :
      this.location = location;
      // console.log(this.location);
    this.safe = false;
  }

  houseWords() {
    if (this.safe === true) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }
}

module.exports = Stark;