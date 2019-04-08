class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    home === undefined ? 
      this.home = 'Beyond the Wall' :
      this.home = home;
      // console.log(this.home);
    size === undefined ?
      this.size = 'Massive' :
      this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (stark.location === this.home) {
      this.huntsWhiteWalkers = false;
      stark.safe = true;
      this.starksToProtect.push(stark);
    }
    if (this.starksToProtect.length >= 3) {
      this.starksToProtect.pop();
    }
  }

  leave(stark) {
    this.starksToProtect.pop();
    stark.safe = false;
  }
}

module.exports = Direwolf;