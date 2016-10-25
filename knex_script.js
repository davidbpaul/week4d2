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

const person = process.argv[2]
console.log('SEARCHING..')
knex.select('*').from('famous_people')
.where('first_name', person)
.orWhere('last_name', person)
.asCallback(function(err, rows) {
  console.log(`Found ${rows.length} person(s) by the name ${person}:`)
   for(row in rows){
    console.log(`-${rows.length}: ${rows[row].first_name} ${rows[row].last_name} born, ${rows[row].birthdate}`);
  }
});

