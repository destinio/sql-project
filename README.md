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

## Learn to utilize `pg`

- https://node-postgres.com/
- `npm i pg`
