## Use Docker to create a Postgres DB

1. Create a Makefile. Add commands to setup a Postgres instance and to create a DB. [Link](https://github.com/strbrgr/yeast/blob/main/Makefile)

## Write and run DB migrations with golang-migrate

1. Make sure your Docker container is still running.
2. Run `make createdb` to create a database in our Docker container.
3. We run `migrate create -ext sql -dir db/migration -seq init_schema` to create our first schema. This will be empty initially.
4. We then paste our [generated](https://dbdiagram.io/) database code into the 000001 up-script.
5. Our down-script needs to contain code to drop all tables (as 000001 up only created them). Pay attention to the order of statements. Pizzas have to be dropped first as there is a relation between users and pizzas.

## Generate CRUD operations with _sqlc_

1. Define a sqlc.yaml file in the root folder and define paths for the db, query and migration files.
2. Add your the `query/` and `sqlc/` folder and specify the paths in the `.yaml` file.
3. Init a go project with `go mod init` and add dependencies via `go mod tidy`.
4. Write your first query and run `sqlc generate`.
