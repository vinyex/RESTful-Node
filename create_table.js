var db = require('./db_config');

db.connect(function(err){

	let sql = `CREATE TABLE person
	(
		id int NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(50), 
        last_name VARCHAR(50),
        PRIMARY KEY (id)
	)`;
	db.query(sql, function (err, result) {
       if (err) throw err;
       console.log("Table created");
    });
});