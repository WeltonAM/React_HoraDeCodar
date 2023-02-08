const express = require ('express')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.json({message: "First route"})
})

// post route
app.post('/product/create', (req, res) => {
    
    const name = req.body.name
    const price = req.body.price
    
    res.json({message: `Product: ${name}, created`})
})

// status in the response
app.post('/user/create', (req, res) => {

    const name = req.body.name
    const email = req.body.email
    
    if(!name){
        res.status(422).json({message: `Name is required!`})
        return
    }
    
    res.status(201).json({message: `User: ${name}, created`})
})

app.listen(3000)