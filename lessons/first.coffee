isArthur = true
isKing = true
weapon = undefined
if isArthur
  weapon = "Excalibur"
else
  weapon = "Longsword"
console.log weapon
weapon = (if isArthur then "Excalibur" else "Longsword")
console.log "Current weapon!: " + ((if isArthur and isKing then "Excalibur" else "Longsword"))