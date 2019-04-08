class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.food = 0;
  }

  eat() {
    this.food++;
    if (this.food === 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;