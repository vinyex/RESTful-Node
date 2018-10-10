var db = require("./db_config");

db.connect(function(err){

	let sql = "CREATE DATABASE api_node";
	db.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Database created dude!");
	});
});