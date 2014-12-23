armory = addSword: (sword) ->
  @swords = @swords or []
  @swords.push sword
  return

armory.addSword "Excalibor"
armory.addSword "Claymore"
console.log armory.swords
armory.retrieveSword = (request) ->
  (if (@swords.indexOf(request) >= 0) then @swords.splice(@swords.indexOf(request), 1)[0] else console.log("No " + request + ", baby!"))

armoryIsOpen = true
isKnight = true
weapon = armoryIsOpen and isKnight and armory.retrieveSword("Claymore")
console.log weapon