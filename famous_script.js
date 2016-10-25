const pg = require("pg");
const settings = require("./settings"); // settings.json

const person = process.argv.slice(2)
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE first_name= $1::text  OR last_name= $1::text ", [`${person}`], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log('SEARCHING..')
    if(true){
    console.log(`Found ${result.rows.length} person(s) by the name 'Lincoln':`)
    output(result)
    client.end();
    }
    else{
      console.log('nobody by that name')
    }
  });
});


function output(result){
  for(row in result.rows){
    console.log(`-${result.rows.length}: ${result.rows[row].first_name} ${result.rows[row].last_name} born, ${result.rows[row].birthdate}`); //output: 1
  }
}