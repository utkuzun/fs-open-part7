import React from 'react'
import { useField } from '../hooks'

const CreateNew = (props) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    })
  }

  const resetForm = () => {
    author.reset()
    info.reset()
    content.reset()
  }

  const parseField = (field) => {
    // eslint-disable-next-line no-unused-vars
    const { reset, ...others } = field
    return others
  }
  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...parseField(content)} />
        </div>
        <div>
          author
          <input {...parseField(author)} />
        </div>
        <div>
          url for more info
          <input {...parseField(info)} />
        </div>
        <button type='submit'>create</button>
        <button type='button' onClick={resetForm}>
          reset
        </button>
      </form>
    </div>
  )
}

export default CreateNew
