import express from 'express'
import pg from 'pg'

const PORT = process.env.PORT || 1337

const app = express()

const db_url = 'postgres://postgres:hello@localhost:5432/recipe_book'

app.get('/', async (req, res) => {
  const client = new pg.Client(db_url)
  await client.connect()

  client.query('SELECT * FROM recipes', (err, res) => {
    console.log({ err, res })
  })

  res.json({ msg: 'hello' })
})

app.listen(PORT, () => console.log('server running'))
