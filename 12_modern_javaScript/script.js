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
console.log('---------')
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
console.log('---------')
const arr = [1, 2, 3, 4, 5]

console.log(arr)

const highNumber = arr.filter((n) => {
    if(n >= 3){
        return n
    }
})

console.log(highNumber)