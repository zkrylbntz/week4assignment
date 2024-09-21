//Here you can add your SQL queries to create your table and add dummy data
import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS feedback (
    id SERIAL PRIMARY KEY,
    name TEXT,
    date_visited DATE,
    device_used TEXT,
    comments TEXT
    );`);

db.query(`INSERT INTO feedback(name, date_visited, device_used, comments)
    VALUES ('Zak', '2024-09-20', 'Laptop',
    'What a lovely guestbook, thanks for having me!')`);
