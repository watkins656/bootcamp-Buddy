DROP DATABASE IF EXISTS ku_coding_bootcamp;
CREATE DATABASE ku_coding_bootcamp;

USE ku_coding_bootcamp;

CREATE TABLE sessions (
    id INT NOT NULL AUTO_INCREMENT,
    `dateOfSession` DATE, 
    `session_number` VARCHAR(20),
    `session_name` VARCHAR(255),
    week INT(3),
    instructor VARCHAR(30),
    panopto_link VARCHAR(255),
    notes_link VARCHAR(255),
    PRIMARY KEY (id)
    
);

INSERT INTO sessions (
    dateOfSession,
    session_number,
    session_name,
    week,
    instructor,
    panopto_link,
    notes_link
)
VALUES (
    "2018-07-30",
    "1.1",
    "The Zen Of Coding",
    1,
    "Ryan LaRue",
    "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0e3cdb54-68f4-49fc-88d1-a92e000097e4",
    "www.notes.com"
);
