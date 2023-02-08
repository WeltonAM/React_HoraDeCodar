// 1 - var, let adn const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}
console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}
console.log(a)

function logName() {
    const name = "Juliana"
    console.log(name)
}

const name = "Karla"
console.log(name)

logName()

// 2 - Arrow function
console.log('--arrow function-------')
const sum = function sum(a, b) {
    return a + b
}

const sumB = (a, b) => a + b

console.log(sum(5, 5))
console.log(sumB(10, 5))

const greeting = (name) => {
    if (name) {
        console.log(`Hello, ${name}`)
    }
}

greeting("Juliana")

// 3 - filter
console.log('--filter-------')
const arr = [1, 2, 3, 4, 5]

console.log(arr)

const highNumber = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumber)

// 4 - map
console.log('--map-------')
const products = [
    { name: 'Shirt', price: 9.99, category: 'Clothes' },
    { name: 'Pants', price: 20.99, category: 'Clothes' },
    { name: 'Oven', price: 70.99, category: 'Electronics' },
    { name: 'Micro-oven', price: 60.99, category: 'Electronics' },
]

products.map((prod) => {
    if (prod.category === 'Clothes') {
        prod.onSale = true
    }
})

console.log(products)

// 5 - template literals
console.log('--template literals-------')
const userName = "Juliana"
const age = 27

console.log(`Welcome ${userName}, you're ${age} years old.`)

// 6 - destructuring
console.log('--Array destructuring-------')
const fruits = ["Appel", "Orange", "Watermelon"]
const [f1, f2, f3] = fruits

console.log(f1)

console.log('--Object destructuring-------')
const productDetails = {
    name: "Mouse",
    price: 11.95,
    category: "Technology",
    color: "Gray"
}

const { name: productName, price } = productDetails

console.log(`The product is a ${productName}, and it coasts ${price}`)

// 7 - spread operator
console.log('--spread operator-------')
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

// 8 - classes
console.log('--classes-------')
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Shirt", 19.60)
const shoes = new Product("Shoes", 49.60)

console.log(shirt.productWithDiscount(10))
console.log(shoes.productWithDiscount(10))

// 9 - heritage
console.log('--heritage-------')
class ProductWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log("The colors:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Hat", 7.50, ["Black", "White", "Blue"])

console.log(hat.productWithDiscount(30))
hat.showColors()