const Author = require('../../models/Author')

const addAuthor = async ({ AddAuthorInput }, params, context) => {
  const a = Author.query().insert({ AddAuthorInput })
  return a
}

const resolver = {
  Mutation: {
    addAuthor,
  },
}

module.exports = resolver
