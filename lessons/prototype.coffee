SignalFire = (ID, startingLogs) ->
  @fireID = ID
  @logsLeft = startingLogs
  return
SignalFire:: =
  addLogs: (numLogs) ->
    @logsLeft += numLogs
    return

  lightFire: ->
    console.log "Whoooosh!"
    return

  smokeSignal: ->
    if @logStatus < @message.length / 10
      console.log "Not enough fuel to send " + "the current message!"
    else
      @lightFire()
      x = @message.length
      i = 0

      while i < x
        console.log "(((" + @message[i] + ")))"
        @logsLeft--  if i % 10 is 0 and i isnt 0
        i++
    return

fireOne = new SignalFire(1, 20)
fireTwo = new SignalFire(2, 18)
fireThree = new SignalFire(3, 24)
fireOne.addLogs 8
fireTwo.addLogs 10
fireThree.addLogs 4
console.log fireOne.logsLeft
console.log fireTwo.logsLeft
console.log fireThree.logsLeft