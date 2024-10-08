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

// db.query(`INSERT INTO feedback(name, date_visited, device_used, comments)
//     VALUES ('Morgan', '2024-09-21', 'iPhone',
//     'Hey, how's it going? Great stuff!')`);

// db.query(`INSERT INTO feedback(name, date_visited, device_used, comments)
//     VALUES ('Nina', '2024-09-22', 'Mumma's iPhone',
//     'Can I watch Encanto in Spanish on here?!')`);

// db.query(`INSERT INTO feedback(name, date_visited, device_used, comments)
//     VALUES ('Jasper', '2024-09-23', 'Dadda's iPhone',
//     'TTTTTT.RRRREeexx! Brachiosaurus!')`);

db.query(`INSERT INTO feedback(name, date_visited, device_used, comments)
    VALUES ('Jesse', '2024-09-24', 'Unknown',
    'Goo Goo Gaa Gaa!')`);
