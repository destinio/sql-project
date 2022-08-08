# Learning Postgres

## Set up DB with docker

```markdown
# Quick Start

docker run --name some-postgres-name -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

```yaml
# compose
version: '3.1'

services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: somepassword
      POSTGRES_USER: postgres
      POSTGRES_DB: recipe_book
    ports:
      - '5432:5432
```

### https://dbeaver.io/

- download

- NOTE: If you can't find you DBs and Tables after you create
  - Preferences > Connections > Drivers > PostgresSQL > show all databases

```sql
CREATE TABLE recipes(
	id serial primary key,
	name varchar(100),
	ingredients text,
	directions text
);

INSERT INTO recipes (name, ingredients, directions)
values ('the cake', 'flour, sugar', 'make the cake'),
('a steak', 'beef, butter', 'make the steak');

select * from recipes;
```

## Learn to utilize `pg`

- https://node-postgres.com/
- `npm i pg`
