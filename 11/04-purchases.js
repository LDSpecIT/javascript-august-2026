// PURCHASES ARRAY EXERCISES //

const purchases = [
    { item: "Orange", price: 3.99, purchasedBy: "Tim" },
    { item: "Pasta", price: 2.99, purchasedBy: "Tim" },
    { item: "Easy Ramen", price: 5.99, purchasedBy: "Jane" },
    { item: "Pasta", price: 2.99, purchasedBy: "Jane" },
    { item: "Beans", price: 6.99, purchasedBy: "Jimothy" },
    { item: "Trash", price: 0.99, purchasedBy: "Jimothy" },
    { item: "Champagne", price: 29.95, purchasedBy: "Tim" },
    { item: "Literally Just Coffee Beans", price: 6.49, purchasedBy: "Jane" },
    { item: "Pasta", price: 1.99, purchasedBy: "Jane" },
    { item: "Banana", price: 3.99, purchasedBy: "Jane" },
    { item: "Ice Cream", price: 5.95, purchasedBy: "Tim" },
    { item: "Ice Cream", price: 5.95, purchasedBy: "Jimothy" },
    { item: "Trash", price: 3.95, purchasedBy: "Jimothy" },
    { item: "Trash", price: 20.90, purchasedBy: "Jimothy" },
    { item: "Trash", price: 0.01, purchasedBy: "Jimothy" },
]

// Use a method to see a new array of only "Ice Cream" purchases

                const findIceCream = purchases.filter((findIce=> findIce.item === "Ice Cream"))
                console.log (findIceCream)



// Use a method to group all purchases alphabetically by the `purchasedBy` name

                purchases.sort((a,b) => a.purchasedBy > b.purchasedBy)



// Use a method to add all prices together and see the total as a number for the day


                const runningCost = purchases.reduce((totalCost, items) => totalCost + items.price, 0)



// Use .filter() and .reduce() to get the total spent by a "Jimothy"



                const jimPurchases = purchases.filter(individual => individual.purchasedBy === "Jimothy")

                jimPurchases.reduce((jimTotalCost, buys) => jimTotalCost + buys.price ,0)



// Use .filter() and .reduce() to get the total spent on "trash"

                const trashPurchased = purchases.filter(garbage => garbage.item === "Trash")
                const trashCost = trashPurchased.reduce((a, i) => a + i.price, 0)




// Use methods along with some mathematical operations to get the average price of an item sold
              
                const ave1 = purchases.reduce((a,i) => a + i.price, 0) / purchases.length


