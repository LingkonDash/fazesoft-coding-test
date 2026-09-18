const express = require('express')

const app = express()

// memory task:
let task = [];

const CATEGORY = ['work', 'personal', 'study']

app.get('/', (req, res) => {
  res.json('Hello World');
})


app.post('api/post', (req, res) => {
  const {title, category} = req.body;
if(!title || !title.trim(' ') ) {

}
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})