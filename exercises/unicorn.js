class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color;
  }

  isWhite() {
    return false;
  }

  says(words) {
    return `**;* ${words} *;**`;
  }
}

module.exports = Unicorn;
