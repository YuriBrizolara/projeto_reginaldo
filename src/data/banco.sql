CREATE TABLE usuarios(
    id serial primary key,
    nome text not null,
    email text unique not null,
    senha text not null
);