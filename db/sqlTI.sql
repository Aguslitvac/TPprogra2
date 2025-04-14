create table usuarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
email  VARCHAR(255) NOT NULL UNIQUE,
pass VARCHAR(50) NOT NULL,
fecha DATE NOT NULL,
dni INT(8) UNSIGNED NOT NULL,
foto VARCHAR(255) NOT NULL,
createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP

);

create table productos (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
imagen VARCHAR(50) NOT NULL,
nombre VARCHAR(255) NOT NULL,
descripcion VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAT TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FK_userid INT UNSIGNED NOT NULL,
foreign key (FK_userid) references usuarios (id)
);

create table comentarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
texto VARCHAR(255) NOT NULL,
createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FK_userid INT UNSIGNED NOT NULL,
foreign key (FK_userid) references usuarios (id),
FK_productoid INT UNSIGNED,
foreign key (FK_productoid) references productos(id)
);


insert into usuarios (email, pass, fecha, dni, foto)
values ("agomezdisanto@udesa.edu.ar", "hola123", "2025-04-13", 12345678, "amalia.png"),
("agomez@udesa.edu.ar", "hola456", "2025-04-13", 56938456, "ama.png"),
("adisanto@udesa.edu.ar", "hola789", "2025-04-13", 08525896, "ami.png"),
("alitvac@udesa.edu.ar", "hola012", "2025-04-13", 23456731, "litvac.png"),
("tcanan@udesa.edu.ar", "hola345", "2025-04-13", 09845673, "tiago.png");

insert into productos (imagen, nombre, descripcion, FK_userid)
values ("buzo.jpg", "buzo dragon ball z", "Buzo con diseño de Gokú y Vegeta estilo retro.", 1),
("juego.jpg", "juego dragon ball z", "Revive la historia de Gokú en este juego de acción", 2),
("portamerienda.jpg", "portamerienda dragon ball z", "Mochila pequeña con diseño infantil de Gokú", 3),
("llavero.jpg", "llavero dragon ball z", "Llavero de goma con diseño adorable de Gokú niño.", 4),
("gaseosas.jpg", "gaseosas dragon ball z", "Gaseosas Ocean Bomb Dragon Ball",5),
("caramelos.jpg", "caramelos dragon ball z", "Dulces en envase con forma de esfera del dragón", 1),
("manga.jpg", "manga dragon ball z", "Manga Dragon Ball Color: Saga Saiyajin Vol. 2", 2),
("setdefiguras.jpg", "set de figuras dragon ball z", "Colección de mini figuras de personajes icónicos", 3),
("taza.jpg", "taza dragon ball z", "Taza con ilustraciones de Gokú en diferentes formas.", 4),
("figuradeaccion.jpg", "figura de accion dragon ball z", "Figura detallada de Gokú transformado en Super Saiyajin.", 5);


insert into comentarios (texto, FK_userid, FK_productoid)
values("Buena calida", 1, 1),
("Buena calida", 2, 1),
("Buena calida", 3, 1),
("Buena calida", 4, 2),
("Buena calida", 5, 2),
("Buena calida", 1, 2),
("Buena calida", 2, 3),
("Buena calida", 3, 3),
("Buena calida", 4, 3),
("Buena calida", 5, 4),
("Buena calida", 1, 4),
("Buena calida", 2, 4),
("Buena calida", 3, 5),
("Buena calida", 4, 5),
("Buena calida", 5, 5),
("Buena calida", 1, 6),
("Buena calida", 2, 6),
("Buena calida", 3, 6),
("Buena calida", 4, 7),
("Buena calida", 5, 7),
("Buena calida", 1, 7),
("Buena calida", 2, 8),
("Buena calida", 3, 8),
("Buena calida", 4, 8),
("Buena calida", 5, 9),
("Buena calida", 1, 9),
("Buena calida", 2, 9),
("Buena calida", 3, 10),
("Buena calida", 4, 10),
("Buena calida", 5, 10);









 