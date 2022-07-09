const express = require('express')
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/api/users', (req,res) => {
    let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riley', 'Alec']

    res.status(200).send(friends)
})

// let hot = "/weather/hot"
// let cold = '/weather/cold'

// app.get(hot, (req,res) => {
//     const phrase = `It was ${req.params.temperature} today`
//     res.status(200).send(phrase)
// })

// app.get(cold, (req,res) => {
//     const { temperature } = req.params
//     const phrase = `It was ${temperature} today`
//     res.status(200).send(phrase)
// })
app.get("/weather/:temperature", (req,res) => {
    const { temperature } = req.params
    const phrase = `It was ${temperature} today`
    phrase.outerHTML = '<h3>' + phrase.innerHTML + '</h3>'
    // if (typeof window !== 'undefined') {
    //     let h3 = document.createElement('h3')
    //     h3.outerHTML = '<h3>' + h3.innerHTML + '</h3>'
    // }
    res.status(200).send(phrase)
})

//when coming back this is where I'm stuck. I'm trying to get the lines above to push an H3 tag to the object so that it will display on the screen as a heading font style.


app.listen(4000, () => console.log('listening on port 4000'))

