const express = require("express");
const server = express();
const sqlite3 = require("sqlite3").verbose();
// Resten av uppgiften ska skrivas i callbackfunktionen för serverns .get-metod
//   Använd databasobjektet (variabeln sqlite3) för att skapa en databaskoppling och lagra den i en variabel.
//   Hämta sedan alla rader ur tabellen users

server
	.use(express.json())
	.use(express.urlencoded({ extended: false }))
	.use((req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "*");
		res.header("Access-Control-Allow-Methods", "*");
		next();
	});

server.listen(3000, () => {
	console.log("Server is running on http://localhost:3000 ");
});

// en callbackfunktion i form av en anonym arrowfunktion, som tar
// parametrarna req och res. Lämna funktionen tom i övrigt för nu.
// Parametrarna måste tas emot i den ordningen.

server.get("/users", (req, res) => {
	const method = req.method;
	const url = req.url;

	const db = new sqlite3.Database("./gik339-labb2.db");
	const sql = "SELECT * FROM users";
	db.all(sql, (err, rows) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(rows);
		}
	});
});
