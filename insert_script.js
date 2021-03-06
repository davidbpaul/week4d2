const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection:{
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
}
})

const first = process.argv[2]
const last = process.argv[3]
const birth = process.argv[4]

knex('famous_people').insert({first_name: first, last_name: last, birthdate: birth})
.then(function() {
      return insert = true;
    })
console.log('inserted')