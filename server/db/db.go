package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"cloud.google.com/go/cloudsqlconn"
	"cloud.google.com/go/cloudsqlconn/postgres/pgxv4"
)

func GetDB() (*sql.DB, func() error) {
	cleanup, err := pgxv4.RegisterDriver("cloudsql-postgres", cloudsqlconn.WithIAMAuthN())
	if err != nil {
		log.Fatalf("Error on pgxv4.RegisterDriver: %v", err)
	}

	dsn := fmt.Sprintf("host=%s user=%s dbname=%s sslmode=disable", os.Getenv("INSTANCE_CONNECTION_NAME"), os.Getenv("DB_USER"), os.Getenv("DB_NAME"))
	db, err := sql.Open("cloudsql-postgres", dsn)
	if err != nil {
		log.Fatalf("Error on sql.Open: %v", err)
	}

	createPizzas := `CREATE TABLE IF NOT EXISTS pizzas (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    sauce VARCHAR(255) NOT NULL,
    toppings TEXT[] NOT NULL
  );`
	_, err = db.Exec(createPizzas)
	if err != nil {
		log.Fatalf("unable to create table: %s", err)
	}

	return db, cleanup
}
