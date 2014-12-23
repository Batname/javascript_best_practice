(function() {
  var isArthur, isKing, weapon;

  isArthur = true;

  isKing = true;

  weapon = void 0;

  if (isArthur) {
    weapon = "Excalibur";
  } else {
    weapon = "Longsword";
  }

  console.log(weapon);

  weapon = (isArthur ? "Excalibur" : "Longsword");

  console.log("Current weapon!: " + (isArthur && isKing ? "Excalibur" : "Longsword"));

}).call(this);

(function() {
  var armory, armoryIsOpen, isKnight, weapon;

  armory = {
    addSword: function(sword) {
      this.swords = this.swords || [];
      this.swords.push(sword);
    }
  };

  armory.addSword("Excalibor");

  armory.addSword("Claymore");

  console.log(armory.swords);

  armory.retrieveSword = function(request) {
    if (this.swords.indexOf(request) >= 0) {
      return this.swords.splice(this.swords.indexOf(request), 1)[0];
    } else {
      return console.log("No " + request + ", baby!");
    }
  };

  armoryIsOpen = true;

  isKnight = true;

  weapon = armoryIsOpen && isKnight && armory.retrieveSword("Claymore");

  console.log(weapon);

}).call(this);

(function() {
  var Armory, armory, armoryIsOpen, isKnight, result1, result2, result3, weapon;

  Armory = (function() {
    function Armory() {}

    Armory.prototype.retrieveSword = function(request) {
      if (this.swords.indexOf(request) >= 0) {
        return this.swords.splice(this.swords.indexOf(request), 1)[0];
      } else {
        return console.log("No " + request + ", baby!");
      }
    };

    Armory.prototype.bat = 10;

    Armory.prototype.addSword = function(sword) {
      this.swords = this.swords || [];
      return this.swords.push(sword);
    };

    return Armory;

  })();

  armory = new Armory();

  armory.addSword("Excalibor");

  armory.addSword("Claymore");

  armoryIsOpen = true;

  isKnight = true;

  weapon = armoryIsOpen && isKnight && armory.retrieveSword("Katana");

  console.log(weapon);

  result1 = void 0 && 42;

  console.log(result1);

  result2 = 0 && ['Sweet', 'array'];

  console.log(result2);

  result3 = "" && {
    type: "ring",
    stone: "diamond"
  };

  console.log(result3);

}).call(this);
