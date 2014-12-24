class Armory
  retrieveSword : (request) ->
    (if (@swords.indexOf(request) >= 0) then @swords.splice(@swords.indexOf(request), 1)[0] else console.log("No " + request + ", baby!"))
  bat: 10
  addSword: (sword) ->
    @swords = @swords or []
    @swords.push sword


armory = new Armory()
armory.addSword "Excalibor"
armory.addSword "Claymore"
armory.addSword "LongSord"

armoryIsOpen = true
isKnight = true
weapon = armoryIsOpen and isKnight and armory.retrieveSword("Katana")
console.log weapon

result1 = undefined && 42
console.log result1

result2 = 0 && ['Sweet', 'array']
console.log result2

result3 = "" && {type: "ring", stone: "diamond"};
console.log result3

