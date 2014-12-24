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
  var basketModule;

  basketModule = (function() {
    var basket;
    basket = [];
    return {
      addItem: function(values) {
        basket.push(values);
      },
      getItemCount: function() {
        return basket.length;
      },
      getTotal: function() {
        var p, q;
        q = this.getItemCount();
        p = 0;
        while (q--) {
          p += basket[q].price;
        }
        return p;
      }
    };
  }).call(this);

  basketModule.addItem({
    item: "bread",
    price: 0.5
  });

  basketModule.addItem({
    item: "butter",
    price: 0.3
  });

  console.log(basketModule.getItemCount());

  console.log(basketModule.getTotal());

}).call(this);

(function() {
  var SignalFire, fireOne, fireThree, fireTwo;

  SignalFire = function(ID, startingLogs) {
    this.fireID = ID;
    this.logsLeft = startingLogs;
  };

  SignalFire.prototype = {
    addLogs: function(numLogs) {
      this.logsLeft += numLogs;
    },
    lightFire: function() {
      console.log("Whoooosh!");
    },
    smokeSignal: function() {
      var i, x;
      if (this.logStatus < this.message.length / 10) {
        console.log("Not enough fuel to send " + "the current message!");
      } else {
        this.lightFire();
        x = this.message.length;
        i = 0;
        while (i < x) {
          console.log("(((" + this.message[i] + ")))");
          if (i % 10 === 0 && i !== 0) {
            this.logsLeft--;
          }
          i++;
        }
      }
    }
  };

  fireOne = new SignalFire(1, 20);

  fireTwo = new SignalFire(2, 18);

  fireThree = new SignalFire(3, 24);

  fireOne.addLogs(8);

  fireTwo.addLogs(10);

  fireThree.addLogs(4);

  console.log(fireOne.logsLeft);

  console.log(fireTwo.logsLeft);

  console.log(fireThree.logsLeft);

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

  armory.addSword("LongSord");

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
