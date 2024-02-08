postgres: 
	docker run --name postgres14 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres:14-alpine

createdb:
	docker exec -it postgres14 createdb --username=root --owner=root yeast

dropdb:
	docker exec -it postgres14 dropdb yeast

migrateup:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5432/yeast?sslmode=disable" -verbose up

migratedown: 
	migrate -path db/migration -database "postgresql://root:secret@localhost:5432/yeast?sslmode=disable" -verbose down


.PHONY: postgres createdb dropdb migrateup migratedown

