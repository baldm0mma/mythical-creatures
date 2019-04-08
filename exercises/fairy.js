class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    } 
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.fairyCounter = 0;
  }

  receiveBelief() {
    this.dust++;
  }
  
  believe() {
    this.dust = this.dust + 10;
  }

  makeDresses(flowers) {
    var arr1 = this.clothes.dresses;
    var arr2 = flowers;
    var newArray = arr1.concat(arr2);
    this.clothes.dresses = newArray;
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    this.fairyCounter++;
    if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
      // console.log(infant);
    } else {
      return infant;
    }
    if (this.fairyCounter >= 3) {
      this.disposition = 'Good natured';
    }
  }
}

module.exports = Fairy;