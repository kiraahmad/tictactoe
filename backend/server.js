const express = require ('express')
const calculateWinner = require('./helpers/helper')

const app = express()

app.use(express.json())


app.post('/api/tic', (req,res) => {
  const squares = req.body

  //Will calculate if there is a winner then send the winner to the front-end
  const winner = calculateWinner(squares)
  winner ? res.json({winner}) : res.json({message: ' '})
})

app.listen(5000, console.log('server up and running on server 5000'))