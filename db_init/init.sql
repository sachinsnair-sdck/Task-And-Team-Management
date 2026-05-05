CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    
    user_name VARCHAR(255) NOT NULL,

    role VARCHAR (255) NOT NULL
);

INSERT INTO users(user_name,role) 
VALUES('SAGAR','MANAGER'),('SACHIN','ADIMA');

CREATE TABLE IF NOT EXISTS tasks(
    id SERIAL PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    status VARCHAR(255) NOT NULL,

    user_id INT,

    CONSTRAINT fk_users
        FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT    
);

INSERT INTO tasks(title,status,user_id) 
VALUES
('Setup Docker Network','TODO','2'),
('Angular Dashboard','DONE','2'),
('Project Presentation','DONE','1'),
('Spring Healthchecks','DONE','2');