const knex = require('knex');

const DATABASES = ["movies", "ratings"];

const db = (dbName) => {
  if (!DATABASES.includes(dbName.toLowerCase())) {
    throw new Error(`No database found for ${dbName}`)
  }

  return knex({
    client: 'sqlite3',
    connection: {
      filename: `${process.cwd()}/db/${dbName}.db`
    }
  })
}


module.exports = {
  movieDb: db("movies"),
  ratingDb: db("ratings")
}
