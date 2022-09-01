import { useState } from 'react'
import { Routes, Route, useMatch, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import Notification from './components/Notification'
import { displayNotification } from './reducers/notificationsReducer'

import Footer from './components/Footer'
import Menu from './components/Menu'
import About from './components/About'

import Anecdote from './components/Anecdote'
import AnecdoteList from './components/AnecdoteList'

import CreateNew from './components/CreateForm'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ])

  const notification = useSelector((state) => state.notification)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const match = useMatch('/anecdotes/:id')

  const anecdote = match
    ? anecdotes.find((item) => item.id === Number(match.params.id))
    : null

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    navigate('/')
    dispatch(displayNotification(`a new anectode ${anecdote.content} added`))
  }

  // const anecdoteById = (id) => anecdotes.find((a) => a.id === id)

  // const vote = (id) => {
  //   const anecdote = anecdoteById(id)

  //   const voted = {
  //     ...anecdote,
  //     votes: anecdote.votes + 1,
  //   }

  //   setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)))
  // }

  return (
    <div>
      <Menu />
      <Notification notification={notification} />
      <h1>Software anecdotes</h1>
      <Routes>
        <Route
          path='/anecdotes/:id'
          element={<Anecdote anecdote={anecdote} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<CreateNew addNew={addNew} />} />
        <Route path='/' element={<AnecdoteList anecdotes={anecdotes} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
