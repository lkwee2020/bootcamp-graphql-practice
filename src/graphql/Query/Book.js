const Book = require('../../models/Book')
const Author = require('../../models/Author')

const allBooks = async () => {
  const b = Book.query()
  return b
}

const book = async (obj, { id }, context) => {
  const b = Book.query().findOne('id', id)
  return b
}
const author = async (obj, { authorId }, context) => {
    const b = Author.query().findOne('id', authorId)
    return b
}

const resolver = {
  Query: {
    allBooks,
    book,
  },
  Book: {
    author,
  },
}

module.exports = resolver
