const Author = require('../../models/Author')
const Address = require('../../models/Address')

const allAuthors = async () => {
  try {
    const authors = Author.query()
    return authors
  } catch (err) {
    console.log(err)
    throw new Error('failed to get authors')
  }
}

const author = async (obj, { id }, context) => {
  const a = await Author.query().findOne('id', id)
  return a
}
const address = async (obj, { addressId }, context) => {
  const a = await Address.query().findOne('id', addressId)
  return a
}

const resolver = {
  Query: {
    allAuthors,
    author,
  },
  Author: {
    address,
  },
}

module.exports = resolver
