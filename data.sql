-- Création de la table "users"
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
);

-- Insertion de données dans la table "users"
INSERT INTO users (id, name, email)
VALUES (1, 'dou abdou', 'a_ndiaye@outlook.com'),
            (2, 'abdou dou', 'jane.doe@example.com');

-- Création de la table "orders"
CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    product_name VARCHAR(50),
    price DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insertion de données dans la table "orders"
INSERT INTO orders (id, user_id, product_name, price)
VALUES (1, 1, 'Product A', 10.99),
            (2, 1, 'Product B', 19.99),
            (3, 2, 'Product C', 5.99);
-- Création de la table "article"
CREATE TABLE article (
    id INT PRIMARY KEY,
    title VARCHAR(100),
    content TEXT,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES users(id)
);

-- Insertion de données dans la table "article"
INSERT INTO article (id, title, content, author_id)
VALUES (1, 'First Article', 'This is the content of the first article', 1),
        (2, 'Second Article', 'This is the content of the second article', 2);

-- Création de la table "page"
CREATE TABLE page (
    id INT PRIMARY KEY,
    title VARCHAR(100),
    content TEXT,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES users(id)
);

-- Insertion de données dans la table "page"
INSERT INTO page (id, title, content, author_id)
VALUES (1, 'About Us', 'This is the content of the About Us page', 1),
            (2, 'Contact Us', 'This is the content of the Contact Us page', 2);
            mysql -u abondiaye -p database_name < /Users/mac/Documents/projet/my_project_directory/data.sql
