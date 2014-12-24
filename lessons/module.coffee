basketModule = (->
  basket = []
  addItem: (values) ->
    basket.push values
    return

  getItemCount: ->
    basket.length

  getTotal: ->
    q = @getItemCount()
    p = 0
    p += basket[q].price  while q--
    p
).call(this)
basketModule.addItem
  item: "bread"
  price: 0.5

basketModule.addItem
  item: "butter"
  price: 0.3

console.log basketModule.getItemCount()
console.log basketModule.getTotal()