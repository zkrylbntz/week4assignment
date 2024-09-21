//Access express, cors, pg, dotenv
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

//Initialise express
const app = express();

//Confiture dotenv
dotenv.config();

//I need to tell my express app to use JSON
app.use(express.json());

//I need to tell my express app to use cors
app.use(cors());

//I need to set up a PORT for my app to listen
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Ready to rumble in PORT ${PORT}`);
});

//!I need to set up my database pool using the connection string
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

//I need to setup a root route
app.get("/", (req, res) => {
  res.json({ message: "This is my root route" });
});
//You need two route minimum

//You need a route to READ the database data
app.get("/feedback", async (req, res) => {
  const query = await db.query(`SELECT * FROM feedback`);
  res.json(query.rows);
  console.log(query);
});

//You need a route to CREATE or ADD new data to the database
app.post("/feedback", async function (req, res) {
  const data = req.body;
  db.query(
    `INSERT INTO feedback(name, date_visited, device_used, comments)
    VALUES ($1, $2, $3, $4)`,
    [`data.name`, `data.date_visited`, `data.device_used`, `data.comments`]
  );
  res.json({ status: "Data received" });
});
//!In your CREATE route, the request.body is an object that represents the form data coming from your client

//You need to use SQL queries and parameters in these routes

//===============================================
//In the .env file, your need your database connection string with the correct PASSWORD

//Your .env file should contain your connection string, for example

//DATABASE_URL=link
//DATABASE_PASSWORD=password

//!Add your password without square brackets!

//============================
//For this assignment, the minimum you need is one table to store your user feedback
