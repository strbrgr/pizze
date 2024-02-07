package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	db "github.com/strbrgr/pizze/server/db"
)

type pizza struct {
	ID       string   `json:"id"`
	Title    string   `json:"title"`
	Sauce    string   `json:"sauce"`
	Toppings []string `json:"toppings"`
}

func main() {
	r := gin.Default()
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("Listening on port %s", port)
	db, cleanup := db.GetDB()
	defer cleanup()

	// Define a route for handling GET requests on /api/v1/pizzas
	r.GET("/api/v1/pizzas", func(c *gin.Context) {
		// Query the pizzas table
		rows, err := db.Query("SELECT * FROM pizzas")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error querying pizzas"})
			return
		}
		defer rows.Close()

		// Iterate through the rows and build a response
		var pizzas []map[string]interface{}
		for rows.Next() {
			var id int
			var title, sauce string
			var toppings []string

			if err := rows.Scan(&id, &title, &sauce, &toppings); err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Error scanning rows"})
				return
			}

			pizza := map[string]interface{}{
				"id":       id,
				"title":    title,
				"sauce":    sauce,
				"toppings": toppings,
			}
			pizzas = append(pizzas, pizza)
		}
		// Return the pizzas as JSON
		c.JSON(http.StatusOK, pizzas)
	})
	r.Run(":" + port)
}
