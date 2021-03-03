//const http = require('http'); //cargar con comand js
//import http from 'http' cargar con ecma script moduls

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let notes = [
    {
        'id': 1,
        'content': 'This is the note one',
        'date': '2019-05-30Tl7:30:31.098Z',
        'important': true
    },
    {
        'id': 2,
        'content': 'This is the note two',
        'date': '2019-05-30Tl7:30:31.098Z',
        'important': false
    },
    {
        'id': 3,
        'content': 'This is the note three',
        'date': '2019-05-30Tl7:30:31.098Z',
        'important': true
    }
]

// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type':'application/json'})
//     response.end(JSON.stringify(notes))
// });

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log({id})
    const note = notes.find(note => note.id === id)
    console.log({note})
    if (note) {
        response.json(note)
    }
    else{
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
})

app.post('/api/notes', (request, response) => {
    const note = request.body

    if (!note || !note.content) {
        return response.status(400).json({
            error: 'note.content is missing'
        })
    }

    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)

    const newNote = {
        id: maxId + 1,
        content: note.content,
        date: new Date().toISOString(),
        important: typeof note.important !== 'undefined' ? note.important : false,
    }

    notes = [...notes, newNote]

    response.status(201).json(newNote)
})

app.use((request, response) => {
    response.status(404).json({
        error: 'Not found'
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})